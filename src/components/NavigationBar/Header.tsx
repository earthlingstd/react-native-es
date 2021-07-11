/**
 * Header
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Metrics from '../../theme/Metrics'
import useTheme from '../../theme/useTheme'

import Action from './Action'
import Content from './Content'

type Props = {
  /**
   * Extra padding to add at the top of header to account for translucent status bar.
   * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
   * Pass `0` or a custom value to disable the default behaviour, and customize the height.
   */
  statusBarHeight?: number

  style?: StyleProp<ViewStyle>

  shouldCenterContent?: boolean

  backgroundColor?: string
}

/**
 * A component to use as a header at the top of the screen.
 * It can contain the screen title, controls such as navigation buttons, menu button etc.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-header.android.png" />
 *     <figcaption>Android</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-header.ios.png" />
 *     <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { NavigationBar } from 'react-native-es';
 *
 * const MyComponent = () => {
 *   const _goBack = () => console.log('Went back');
 *
 *   const _handleSearch = () => console.log('Searching');
 *
 *   const _handleMore = () => console.log('Shown more');
 *
 *   return (
 *     <NavigationBar.Header>
 *       <NavigationBar.BackAction onPress={_goBack} />
 *       <NavigationBar.Content title="Title" subtitle="Subtitle" />
 *       <NavigationBar.Action icon="magnify" onPress={_handleSearch} />
 *       <NavigationBar.Action icon="dots-vertical" onPress={_handleMore} />
 *     </NavigationBar.Header>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Header: React.FC<Props> = props => {
  const { color } = useTheme<Theme.Color>()
  const { shouldCenterContent, statusBarHeight, children, backgroundColor } = props
  const Wrapper = typeof statusBarHeight === 'number' ? View : SafeAreaView
  const bgColor = backgroundColor ? backgroundColor : color.header

  return (
    <Wrapper
      style={[s.wrapper, { paddingTop: statusBarHeight, backgroundColor: bgColor }, props.style]}
    >
      <View style={{ height: Metrics.header.height(), flexDirection: 'row', alignItems: 'center' }}>
        {React.Children.toArray(children)
          .filter(child => child != null && typeof child !== 'boolean')
          .map((child, i) => {
            if (
              !React.isValidElement(child) ||
              ![
                Content.name,
                Action.name,
                // @ts-ignore Type 'string' is not assignable to type
              ].includes(child.type.name)
            ) {
              return child
            }
            const props: { color?: string; style?: StyleProp<ViewStyle> } = {
              color: typeof child.props.color !== 'undefined' ? child.props.color : '#000',
            }

            //@ts-ignore
            if (child.type.name === Content.name) {
              props.style = [
                // Since content is not first item, add extra left margin
                i === 0 && { marginLeft: 5 },
                shouldCenterContent && { alignItems: 'center' },
                child.props.style,
              ]
            }
            return React.cloneElement(child, props)
          })}
      </View>
    </Wrapper>
  )
}

const s = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Metrics.layout.insets.horizontal - 7,
  },
})

export default Header
