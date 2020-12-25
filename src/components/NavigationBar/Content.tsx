/**
 * Content
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
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
  const { largeTitle, subtitle } = props
  return (
    <View>
      <Text
        numberOfLines={1}
        accessible
        accessibilityTraits="header"
        // @ts-ignore Type '"heading"' is not assignable to type ...
        accessibilityRole={Platform.OS === 'web' ? 'heading' : 'header'}
      >
        {props.title}
      </Text>
      {subtitle && !largeTitle ? <Text numberOfLines={1}>{subtitle}</Text> : null}
    </View>
  )
}

// Content.defaultProps = {}

// const s = StyleSheet.create({})

export default Content
