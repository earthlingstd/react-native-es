/**
 * Surface
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import overlay from '../styles/elevation'
import useTheme from '../theme/useTheme'

type Props = {
  /**
   * Resting elevation of the card which controls the drop shadow.
   */
  elevation?: number

  color?: string

  bordered?: boolean

  borderColor?: string

  compact?: boolean

  style?: StyleProp<ViewStyle>
}

const Surface: React.FC<Props> = props => {
  const { color } = useTheme()
  const {
    style,
    bordered,
    borderColor,
    color: propsColor,
    children,
    elevation = 0,
    compact,
  } = props

  return (
    <View
      style={[
        s.container,
        compact && s.compact,
        {
          borderWidth: bordered ? StyleSheet.hairlineWidth : 0,
          borderColor: borderColor || `${color.text}40`,
          backgroundColor: propsColor || overlay(color.background, elevation),
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  compact: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
})

export default Surface
