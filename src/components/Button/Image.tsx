/**
 * Icon button
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'

import useTheme from '../../theme/useTheme'
import FastImage, { Source } from 'react-native-fast-image'

type Props = {
  /**
   * Use a compact look, useful for `text` buttons in a row.
   */
  compact?: boolean
  /**
   * Image to display.
   */
  image: number | Source
  /**
   * Size of the icon.
   */
  size?: number
  /**
   * Whether to show a loading indicator.
   */
  loading?: boolean
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean
  /**
   * Accessibility label for the button. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel?: string
  /**
   * Function to execute on press.
   */
  onPress?: () => void
  /**
   * Function to execute on long press.
   */
  onLongPress?: () => void
  /**
   * Style of button's inner content.
   * Use this prop to apply custom height and width and to set the icon on the right with `flexDirection: 'row-reverse'`.
   */
  contentStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  /**
   * testID to be used on tests.
   */
  testID?: string
}

const Button: React.FC<Props> = props => {
  const { color } = useTheme<Theme.Color>()
  const { image, size = 22, disabled, onPress, style } = props

  // Text style
  const computedStyle = React.useMemo(() => {
    let backgroundColor = 'transparent',
      borderColor = 'transparent',
      borderWidth = 0,
      opacity = 1

    // Calculate textColor
    if (disabled) {
      opacity = 0.4
    }

    return {
      buttonStyle: {
        width: size * 1.6,
        height: size * 1.6,
        backgroundColor,
        borderColor,
        borderWidth,
        opacity,
      },
      image: {
        width: size * 1.6,
        height: size * 1.6,
      },
    }
  }, [disabled, color.dark])

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[s.button, computedStyle.buttonStyle, style]}
      disabled={disabled}
    >
      <FastImage source={image} style={computedStyle.image} resizeMode="cover" />
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  button: {
    // minWidth: 30,
    // minHeight: 30,
    padding: 5,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fl1: {
    flex: 1,
  },
})

export default Button
