/**
 * Action
 *
 * @format
 *
 */

import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

type Props = {
  style?: StyleProp<ViewStyle>
}

const Action: React.FC<Props> = props => {
  return <View style={props.style} />
}

// Action.defaultProps = {}

// const s = StyleSheet.create({})

export default Action
