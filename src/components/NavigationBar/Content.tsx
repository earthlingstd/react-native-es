/**
 * Content
 *
 * @format
 *
 */

import React from 'react'
import { Platform, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import useTheme from '../../theme/useTheme'
import Text from '../Typography/Text'

type Props = {
  /**
   * Is title large
   */
  largeTitle?: boolean
  /**
   * Text for the title.
   */
  title: React.ReactNode
  /**
   * Style for the title.
   */
  titleStyle?: StyleProp<TextStyle>
  /**
   * Reference for the title.
   */
  titleRef?: React.RefObject<Text>
  /**
   * Text for the subtitle.
   */
  subtitle?: React.ReactNode
  /**
   * Style for the subtitle.
   */
  subtitleStyle?: StyleProp<TextStyle>
  /**
   * Function to execute on press.
   */
  onPress?: () => void

  style?: StyleProp<ViewStyle>
}

const Content: React.FC<Props> = props => {
  const { color } = useTheme<Theme.Color>()
  const { largeTitle, subtitle, style } = props
  return (
    <View style={[{ flex: 1, paddingHorizontal: 3 }, style]}>
      <Text
        numberOfLines={1}
        accessible
        accessibilityTraits="header"
        // @ts-ignore Type '"heading"' is not assignable to type ...
        accessibilityRole={Platform.OS === 'web' ? 'heading' : 'header'}
        style={[largeTitle ? s.title__large : s.title, { color: color.headerText }]}
      >
        {props.title}
      </Text>
      {subtitle && !largeTitle ? <Text numberOfLines={1}>{subtitle}</Text> : null}
    </View>
  )
}

// Content.defaultProps = {}

const s = StyleSheet.create({
  title: Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: '600',
    },
    android: {
      fontSize: 20,
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    default: {
      fontSize: 18,
      fontWeight: '500',
    },
  }),
  title__large: Platform.select({
    ios: {
      fontSize: 24,
      fontWeight: '700',
    },
    android: {
      fontSize: 24,
      fontFamily: 'sans-serif-bold',
      fontWeight: 'normal',
    },
    default: {
      fontSize: 24,
      fontWeight: '700',
    },
  }),
})

export default Content
