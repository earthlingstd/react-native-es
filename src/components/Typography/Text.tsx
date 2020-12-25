/**
 * Text
 *
 * @format
 *
 */

import React from 'react'
import { Text as RNText } from 'react-native'

type AccessibilityTrait =
  | 'none'
  | 'button'
  | 'link'
  | 'header'
  | 'search'
  | 'image'
  | 'selected'
  | 'plays'
  | 'key'
  | 'text'
  | 'summary'
  | 'disabled'
  | 'frequentUpdates'
  | 'startsMedia'
  | 'adjustable'
  | 'allowsDirectInteraction'
  | 'pageTurn'

type Props = {
  numberOfLines?: number
  accessible?: boolean
  accessibilityTraits?: AccessibilityTrait | AccessibilityTrait[]
}

const Text: React.FC<Props> = props => {
  return (
    <RNText
      accessible={props.accessible}
      // accessibilityTraits={props.accessibilityTraits}
      numberOfLines={props.numberOfLines}
    >
      {props.children}
    </RNText>
  )
}

Text.defaultProps = {}

export default Text
