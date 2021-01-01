/**
 * Text
 *
 * @format
 *
 */

import React from 'react'
import { Text as RNText } from 'react-native'
import useTheme from '../../theme/useTheme'

// @component-group Typography

/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const Text: React.FC<L.TextProps> = props => {
  const { color: colors, fonts, typography } = useTheme<Theme.Color>()
  const { color = 'text', style, weight = 'regular', align = 'left', children, ...rest } = props
  return (
    <RNText
      {...rest}
      accessible={props.accessible}
      // accessibilityTraits={props.accessibilityTraits}
      numberOfLines={props.numberOfLines}
      style={[
        {
          ...fonts[weight],
          fontSize: typography.body,
          color: colors[color],
          textAlign: align,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  )
}

Text.defaultProps = {}

export default Text
