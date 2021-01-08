/**
 * Chip
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import cc from 'color'

import useTheme from '../theme/useTheme'
import Text from './Typography/Text'
import Icon from './Icon'

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
  const { color } = useTheme<Theme.Color>()
  const { onPress, icon, style, selected, selectedColor, textStyle, children, disabled } = props

  const computedStyle = React.useMemo(() => {
    let backgroundColor = color.gray6
    let textColor = color.gray3

    if (selected) {
      backgroundColor = `${selectedColor || color.primary}dd`
      textColor = cc(backgroundColor ? 'white' : 'black').hex()
    } else {
      backgroundColor = `${color.text}11`
    }

    return {
      container: {
        backgroundColor,
        opacity: disabled ? 0.4 : 1,
      },
      textColor,
    }
  }, [disabled, selected])

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[s.container, computedStyle.container, style]}
    >
      <View style={s.content}>
        {!!icon && (
          <Icon
            source={icon}
            color={computedStyle.textColor}
            size={18}
            style={{ marginRight: 6, marginLeft: -3 }}
          />
        )}
        <Text
          weight="semiBold"
          numberOfLines={1}
          style={[s.text, textStyle]}
          color={computedStyle.textColor}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Chip.defaultProps = {}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 3,
    minHeight: 38,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 4,
    minWidth: 40,
  },
  text: {
    minHeight: 24,
    lineHeight: 24,
    textAlignVertical: 'center',
    marginVertical: 4,
  },
})

export default Chip
