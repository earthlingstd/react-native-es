/**
 * Icon button
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import cc from 'color'

import useTheme from '../../theme/useTheme'
import Icon from '../Icon'

type Props = {
  /**
   * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
   * - `text` - flat button without background or outline (low emphasis)
   * - `outlined` - button with an outline (medium emphasis)
   * - `contained` - button with a background color and elevation shadow (high emphasis)
   */
  mode?: 'flat' | 'outlined' | 'contained'
  /**
   * Use a compact look, useful for `text` buttons in a row.
   */
  compact?: boolean
  /**
   * Icon to display.
   */
  icon: L.IconSource
  /**
   * Color of the icon.
   */
  color?: string

  disableTintColor?: boolean
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
  const { icon, color: iconColor, size, disabled, mode, onPress, style } = props

  // Text style
  const computedStyle = React.useMemo(() => {
    const isDark = color.dark
    let backgroundColor = 'transparent',
      textColor = color.primary,
      borderColor = 'transparent',
      borderWidth = 0,
      borderRadius = 7

    // Calculate backgroundColor
    if (mode === 'contained') {
      if (disabled) {
        backgroundColor = cc(color.text).alpha(0.1).rgb().string()
      } else {
        backgroundColor = iconColor || color.primary
      }
    }

    // Calculate textColor
    if (disabled) {
      textColor = cc(isDark ? 'white' : 'black')
        .alpha(0.32)
        .rgb()
        .string()
    } else {
      if (mode === 'contained') {
        let lightText = backgroundColor === 'transparent' ? isDark : !cc(backgroundColor).isLight()
        textColor = lightText ? 'white' : 'black'
      } else {
        textColor = iconColor || color.primary
      }
    }

    // Calculate borderColor
    if (mode === 'outlined') {
      borderColor = cc(isDark ? 'white' : 'black')
        .alpha(0.29)
        .rgb()
        .string()
      borderWidth = StyleSheet.hairlineWidth
    }

    return {
      buttonStyle: {
        width: (size || 22) * 1.6,
        height: (size || 22) * 1.6,
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
      },
      color: textColor,
    }
  }, [disabled, iconColor, color.dark, mode])

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[s.button, computedStyle.buttonStyle, style]}
      disabled={disabled}
    >
      <Icon
        source={icon}
        disableTint={props.disableTintColor}
        color={computedStyle.color}
        size={size}
      />
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  mode: 'flat',
  size: 22,
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
})

export default Button
