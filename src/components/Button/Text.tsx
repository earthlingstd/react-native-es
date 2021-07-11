/**
 * Button
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import cc from 'color'

import Text from '../Typography/Text'
import useTheme from '../../theme/useTheme'

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
   * Custom text color for flat button, or background color for contained button.
   */
  color?: string
  /**
   * Whether to show a loading indicator.
   */
  loading?: boolean
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean
  /**
   * Label text of the button.
   */
  children: React.ReactNode
  /**
   * Make the label text uppercased. Note that this won't work if you pass React elements as children.
   */
  uppercase?: boolean
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
   * Style for the button text.
   */
  labelStyle?: StyleProp<TextStyle>
  /**
   * testID to be used on tests.
   */
  testID?: string
}

const Button: React.FC<Props> = props => {
  const { color } = useTheme<Theme.Color>()
  const {
    color: buttonColor,
    children,
    compact,
    disabled,
    mode,
    labelStyle,
    loading,
    onPress,
    style,
    uppercase,
  } = props

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
        backgroundColor = buttonColor || color.primary
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
        textColor = buttonColor || color.primary
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
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
        opacity: loading ? 0.5 : 1,
      },
      textStyle: { color: textColor },
    }
  }, [disabled, buttonColor, color.dark, mode, loading])

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[s.button, computedStyle.buttonStyle, compact && s.compactButton, style]}
      disabled={disabled || loading}
    >
      {React.Children.map(children, c =>
        typeof c === 'string' ? (
          <Text
            weight="medium"
            style={[
              s.label,
              compact && s.compactLabel,
              uppercase && s.uppercaseLabel,
              computedStyle.textStyle,
              labelStyle,
            ]}
          >
            {c}
          </Text>
        ) : React.isValidElement(c) ? (
          React.cloneElement(c, { color: computedStyle.textStyle.color })
        ) : null,
      )}
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  mode: 'flat',
}

const s = StyleSheet.create({
  button: {
    minWidth: 64,
    minHeight: 44,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
  compactButton: {
    minWidth: 0,
    minHeight: 0,
    paddingHorizontal: 3,
    paddingVertical: 3,
  },
  label: {
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  compactLabel: {},
  uppercaseLabel: {
    textTransform: 'uppercase',
  },
})

export default Button
