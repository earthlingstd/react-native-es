/**
 * H3
 *
 * @format
 *
 */

import React from 'react'
import { Text as RNText } from 'react-native'
import useTheme from '../../theme/useTheme'

// @component-group Typography

/**
 * Subheading component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const H3: React.FC<L.TextProps> = props => {
  const { color: colors, fonts, typography } = useTheme<Theme.Color>()
  const { color = 'text', style, weight = 'medium', align = 'left', children, ...rest } = props
  const colorStr = color.includes('#') ? color : colors[color]

  return (
    <RNText
      {...rest}
      accessible={props.accessible}
      // accessibilityTraits={props.accessibilityTraits}
      numberOfLines={props.numberOfLines}
      style={[
        {
          ...fonts[weight],
          fontSize: typography.h3,
          color: colorStr,
          textAlign: align,
        },
        style,
      ]}
    >
      {props.children}
    </RNText>
  )
}

export default H3
