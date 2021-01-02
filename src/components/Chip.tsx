/**
 * Chip
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

type Props = {
  /**
   * Mode of the chip.
   * - `flat` - flat chip without outline.
   * - `outlined` - chip with an outline.
   */
  mode?: 'flat' | 'outlined'
  /**
   * Text content of the `Chip`.
   */
  children: React.ReactNode
  /**
   * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
   */
  icon?: L.IconSource
  /**
   * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
   */
  avatar?: React.ReactNode
  /**
   * Chip background color
   */
  color?: string
  /**
   * Whether chip is selected.
   */
  selected?: boolean
  /**
   * Whether to style the chip color as selected.
   */
  selectedColor?: string
  /**
   * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean
  /**
   * Function to execute on press.
   */
  onPress?: () => void
  /**
   * Function to execute on close button press. The close button appears only when this prop is specified.
   */
  onClose?: () => void
  /**
   * Style of chip's text
   */
  textStyle?: any
  style?: StyleProp<ViewStyle>
}

const Chip: React.FC<Props> = props => {
  const { style } = props
  return <View style={style}></View>
}

Chip.defaultProps = {}

// const s = StyleSheet.create({})

export default Chip
