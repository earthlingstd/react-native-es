import * as React from 'react'
import { View, ViewStyle, StyleSheet, StyleProp, Animated, TextStyle } from 'react-native'
import Surface from './Surface'
import Text from './Typography/Text'
import Button from './Button'
import Icon from './Icon'
import H3 from './Typography/H3'

const ELEVATION = 1
const DEFAULT_MAX_WIDTH = 960

type Props = {
  bordered?: boolean
  /**
   * Whether banner is currently visible.
   */
  visible: boolean
  title?: string
  /**
   * Content that will be displayed inside banner.
   */
  children: any
  /**
   * Icon to display for the `Banner`. Can be an image.
   */
  icon?: L.IconSource
  /**
   * Action items to shown in the banner.
   * An action item should contain the following properties:
   *
   * - `label`: label of the action button (required)
   * - `onPress`: callback that is called when button is pressed (required)
   *
   * To customize button you can pass other props that button component takes.
   */
  actions: Array<{
    label: string
    color?: string
    onPress: () => void
  }>
  /**
   * Style of banner's inner content.
   * Use this prop to apply custom width for wide layouts.
   */
  contentStyle?: StyleProp<ViewStyle>
  messageStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  ref?: React.RefObject<View>
}

type NativeEvent = {
  nativeEvent: {
    layout: {
      x: number
      y: number
      width: number
      height: number
    }
  }
}

/**
 * Banner displays a prominent message and related actions.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/banner.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Image } from 'react-native';
 * import { Banner } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(true);
 *
 *   return (
 *     <Banner
 *       visible={visible}
 *       actions={[
 *         {
 *           label: 'Fix it',
 *           onPress: () => setVisible(false),
 *         },
 *         {
 *           label: 'Learn more',
 *           onPress: () => setVisible(false),
 *         },
 *       ]}
 *       icon={({size}) => (
 *         <Image
 *           source={{
 *             uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
 *           }}
 *           style={{
 *             width: size,
 *             height: size,
 *           }}
 *         />
 *       )}>
 *       There was a problem processing a transaction on your credit card.
 *     </Banner>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Banner = ({
  visible,
  icon,
  children,
  actions,
  contentStyle,
  messageStyle,
  title,
  style,
  ...rest
}: Props) => {
  const { current: position } = React.useRef<Animated.Value>(new Animated.Value(visible ? 1 : 0))
  const [layout, setLayout] = React.useState<{
    height: number
    measured: boolean
  }>({
    height: 0,
    measured: false,
  })

  const scale = 1

  React.useEffect(() => {
    if (visible) {
      // show
      Animated.timing(position, {
        duration: 250 * scale,
        toValue: 1,
        useNativeDriver: false,
      }).start()
    } else {
      // hide
      Animated.timing(position, {
        duration: 200 * scale,
        toValue: 0,
        useNativeDriver: false,
      }).start()
    }
  }, [visible, position, scale])

  const handleLayout = ({ nativeEvent }: NativeEvent) => {
    const { height } = nativeEvent.layout
    setLayout({ height, measured: true })
  }

  // The banner animation has 2 parts:
  // 1. Blank spacer element which animates its height to move the content
  // 2. Actual banner which animates its translateY
  // In initial render, we position everything normally and measure the height of the banner
  // Once we have the height, we apply the height to the spacer and switch the banner to position: absolute
  // We need this because we need to move the content below as if banner's height was being animated
  // However we can't animated banner's height directly as it'll also resize the content inside
  const height = Animated.multiply(position, layout.height)

  const translateY = Animated.multiply(Animated.add(position, -1), layout.height)
  return (
    <Surface compact {...rest} style={[styles.container, style]}>
      <View style={[styles.wrapper, contentStyle]}>
        <Animated.View style={{ height }} />
        <Animated.View
          onLayout={handleLayout}
          style={[
            layout.measured || !visible
              ? // If we have measured banner's height or it's invisible,
                // Position it absolutely, the layout will be taken care of the spacer
                [styles.absolute, { transform: [{ translateY }] }]
              : // Otherwise position it normally
                null,
            !layout.measured && !visible
              ? // If we haven't measured banner's height yet and it's invisible,
                // hide it with opacity: 0 so user doesn't see it
                { opacity: 0 }
              : null,
          ]}
        >
          <View style={styles.content}>
            <H3 weight="semiBold" style={styles.title}>
              {title}
            </H3>
            <View style={styles.body}>
              {icon ? (
                <View style={styles.icon}>
                  <Icon source={icon} size={40} />
                </View>
              ) : null}
              {React.isValidElement(children) ? (
                children
              ) : (
                <Text style={[styles.message, messageStyle]}>{children}</Text>
              )}
            </View>
          </View>
          <View style={styles.actions}>
            {actions.map(({ label, color, ...others }, i) => (
              <Button.Text
                key={/* eslint-disable-line react/no-array-index-key */ i}
                compact
                color={color}
                style={styles.button}
                {...others}
              >
                {label}
              </Button.Text>
            ))}
          </View>
        </Animated.View>
      </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: ELEVATION,
  },
  wrapper: {
    overflow: 'hidden',
    alignSelf: 'center',
    width: '100%',
    maxWidth: DEFAULT_MAX_WIDTH,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  content: {
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    marginBottom: 5,
  },
  body: {
    flexDirection: 'row',
  },
  icon: {
    margin: 8,
  },
  message: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 5,
    marginHorizontal: 3,
    marginBottom: 12,
  },
})

export default Banner
