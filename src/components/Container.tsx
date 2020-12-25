/**
 * Container
 *
 * @format
 *
 */

import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

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
  forceInset?: ForceInsetProp
}

const Container: React.FC<Props> = props => {
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
      <SafeAreaView style={{ backgroundColor: color.background, flex: 1 }} forceInset={props.forceInset}>
        {renderContent()}
      </SafeAreaView>
    )

  return renderContent(true)
}

export default Container
