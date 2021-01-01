/**
 * Title
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
const Title: React.FC<L.TextProps> = props => {
  const { color: colors, fonts, typography } = useTheme<Theme.Color>()
  const { color = 'text', style, weight = 'bold', align = 'left', children, ...rest } = props
  return (
    <RNText
      {...rest}
      accessible={props.accessible}
      // accessibilityTraits={props.accessibilityTraits}
      numberOfLines={props.numberOfLines}
      style={[
        {
          ...fonts[weight],
          fontSize: typography.largeTitle,
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

export default Title
