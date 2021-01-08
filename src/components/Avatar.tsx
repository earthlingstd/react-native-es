/**
 * Avatar
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import FastImage from 'react-native-fast-image'

type Props = {
  disabled?: boolean
  backgroundColor?: string
  onPress?: () => void
  photoURL: any
  size?: number
  circle?: boolean
  style?: StyleProp<ViewStyle>
}

const Avatar: React.FC<Props> = props => {
  const {
    circle = true,
    disabled,
    photoURL,
    onPress,
    size = 30,
    style,
    backgroundColor = 'transparent',
  } = props
  return (
    <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
      <FastImage
        source={{ uri: photoURL }}
        style={[
          s.image,
          { backgroundColor },
          { width: size, height: size, borderRadius: circle ? size * 0.5 : 0 },
        ]}
        resizeMode="cover"
      />
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  image: {
    backgroundColor: '#DDD',
  },
})

export default Avatar
