/**
 * Header
 *
 * @format
 *
 */

import React from 'react'
import { SafeAreaView, StyleProp, View, ViewStyle } from 'react-native'
import Metrics from '../../theme/Metrics'

import Action from './Action'
import Content from './Content'

type Props = {
  /**
   * Extra padding to add at the top of header to account for translucent status bar.
   * This is automatically handled on iOS >= 11 including iPhone X using `SafeAreaView`.
   * Pass `0` or a custom value to disable the default behaviour, and customize the height.
   */
  statusBarHeight?: number

  shouldCenterContent?: boolean
}

const DEFAULT_HEIGHT = 56

const Header: React.FC<Props> = props => {
  const { shouldCenterContent, statusBarHeight, children } = props
  const Wrapper = typeof statusBarHeight === 'number' ? View : SafeAreaView

  return (
    <Wrapper
      style={{
        height: DEFAULT_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Metrics.layout.insets.horizontal,
        elevation: 4,
      }}
    >
      {React.Children.toArray(children)
        .filter(child => child != null && typeof child !== 'boolean')
        .map((child, i) => {
          if (
            !React.isValidElement(child) ||
            ![
              Content,
              Action,
              // @ts-ignore Type 'string' is not assignable to type
            ].includes(child.type)
          ) {
            return child
          }

          const props: { color?: string; style?: StyleProp<ViewStyle> } = {
            color: typeof child.props.color !== 'undefined' ? child.props.color : '#000',
          }

          if (child.type === Content) {
            props.style = [
              // Since content is not first item, add extra left margin
              i !== 0 && { marginLeft: 8 },
              shouldCenterContent && { alignItems: 'center' },
              child.props.style,
            ]
          }
          return React.cloneElement(child, props)
        })}
    </Wrapper>
  )
}

// Header.defaultProps = {}

// const s = StyleSheet.create({})

export default Header
