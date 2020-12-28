/**
 * Navigation collection
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import Icon from '../Icon'

type Props = {
  onPress: () => void
  style?: StyleProp<ViewStyle>
  color?: string
}

export const Back: React.FC<Props> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Icon source={require('../../assets/ic-back.png')} size={24} color={props.color} />
    </TouchableOpacity>
  )
}

Back.defaultProps = {}
