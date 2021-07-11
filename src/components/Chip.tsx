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

  iconColor?: string

  iconSize?: number
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
  onPress?: (selected: boolean, data?: any) => void
  /**
   * Function to execute on close button press. The close button appears only when this prop is specified.
   */
  onClose?: () => void
  /**
   * Style of chip's text
   */
  textStyle?: any
  style?: StyleProp<ViewStyle>
  data?: any
}

const Chip: React.FC<Props> = props => {
  const { color } = useTheme<Theme.Color>()
  const {
    onPress,
    icon,
    iconColor,
    iconSize = 18,
    style,
    selected = false,
    selectedColor,
    textStyle,
    children,
    disabled,
  } = props

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

  const handlePress = () => {
    if (onPress) onPress(selected, props.data)
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={[s.container, computedStyle.container, style]}
    >
      <View style={s.content}>
        {!!icon && (
          <Icon
            source={icon}
            color={iconColor || computedStyle.textColor}
            size={iconSize}
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

export default React.memo(Chip, (p, n) => p.selected === n.selected && p.disabled === n.disabled)
