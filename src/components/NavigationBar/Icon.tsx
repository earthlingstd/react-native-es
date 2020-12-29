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
}

export const Back: React.FC<Props> = props => {
  const { color } = useTheme<Theme.Color>()
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Icon source={'chevron-left'} size={28} color={props.color || color.primary} />
    </TouchableOpacity>
  )
}

Back.defaultProps = {}
