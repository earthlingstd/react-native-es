/**
 * Navigation collection
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import useTheme from '../../theme/useTheme'
import Icon from '../Icon'

type Props = {
  onPress: () => void
  style?: StyleProp<ViewStyle>
  color?: string
  size?: number
}

export const Back: React.FC<Props> = props => {
  const { color } = useTheme<Theme.Color>()
  return (
    <TouchableOpacity
      onPress={props.onPress}
      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
      style={props.style}
      activeOpacity={0.9}
    >
      <Icon source={'chevron-left'} size={props.size || 28} color={props.color || color.primary} />
    </TouchableOpacity>
  )
}

Back.defaultProps = {}
