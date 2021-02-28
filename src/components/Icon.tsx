/**
 * Icon Component
 *
 * @format
 *
 */

import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Image, ImageStyle, StyleProp } from 'react-native'
import useTheme from '../theme/useTheme'

interface IProps {
  source: L.IconSource
  size?: number
  color?: string | keyof Theme.Color
  style?: StyleProp<ImageStyle>
  disableTint?: boolean
  resizeMode?: 'contain' | 'cover'
}

const Icon: React.FC<IProps> = props => {
  const { size = 22 } = props
  const { color } = useTheme<Theme.Color>()

  const iconColor = () => {
    if (!props.color) return undefined
    if (props.color?.includes('#')) return props.color
    return color[props.color || 'secondary']
  }

  if (typeof props.source === 'string') {
    return (
      <FeatherIcon
        name={props.source || 'check'}
        size={size}
        color={iconColor()}
        style={props.style}
      />
    )
  }
  return (
    <Image
      source={props.source}
      style={[
        props.disableTint
          ? {
              width: size,
              height: size,
            }
          : {
              width: size,
              height: size,
              tintColor: iconColor(),
            },
        props.style,
      ]}
      resizeMode={props.resizeMode || 'contain'}
    />
  )
}

export default Icon
