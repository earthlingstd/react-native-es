/**
 * Container
 *
 * @format
 *
 */

import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'

import useTheme from '../theme/useTheme'

export type ForceInsetValue = 'always' | 'never'
export type ForceInsetProp = {
  top?: ForceInsetValue
  bottom?: ForceInsetValue
  left?: ForceInsetValue
  right?: ForceInsetValue
  horizontal?: ForceInsetValue
  vertical?: ForceInsetValue
}

interface Props {
  children?: React.ReactNode
  safe?: boolean
  style?: StyleProp<ViewStyle>
  edges?: ReadonlyArray<Edge>
}

const Container: React.FC<Props> = props => {
  const { edges = ['right', 'bottom', 'left', 'top'] } = props
  const { color } = useTheme<Theme.Color>()

  function renderContent(applyStyle: boolean = false) {
    return (
      <View style={[{ backgroundColor: color.background, flex: 1 }, applyStyle ? props.style : {}]}>
        {props.children}
      </View>
    )
  }

  if (props.safe)
    return (
      <SafeAreaView style={{ backgroundColor: color.background, flex: 1 }} edges={edges}>
        {renderContent()}
      </SafeAreaView>
    )

  return renderContent(true)
}

export default Container
