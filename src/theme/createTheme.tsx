import React from 'react'
// import { Platform, StatusBar, useWindowDimensions } from 'react-native'

import * as DefaultTheme from './ThemeConfig'

interface CreateThemeParams<T> {
  colors?: L.KV<Theme.Color & T>
  typographies?: L.KV<Theme.Typography>
  defaultColor?: string
  defaultTypography?: 'normal' | 'small' | 'medium'
}

export type ThemeContextType<T> = {
  color: Theme.Color & T
  typography: Theme.Typography
}

export let ThemeContext: ThemeContextType<T>
export let ThemeProvider: any

function createTheme<T>(params: CreateThemeParams<T>) {
  const {
    colors = DefaultTheme.colors as L.KV<Theme.Color & T>,
    typographies = DefaultTheme.typographies,
    defaultColor = 'light',
    defaultTypography = 'normal',
  } = params

  // Default value
  const _color = colors[defaultColor]
  const _typography = typographies[defaultTypography]

  // Create context
  ThemeContext = React.createContext<ThemeContextType<T>>({ color: _color, typography: _typography })

  // Create provider
  ThemeProvider = ({ colorKey, typographyKey, children }) => {
    const color = colors[colorKey] || _color
    const typography = typographies[typographyKey] || _typography
    // const dim = useWindowDimensions()

    // StatusBar.setBarStyle(color.barStyle)
    // StatusBar.setHidden(dim.width > dim.height, 'slide')
    // if (Platform.OS === 'android') {
    //   StatusBar.setBackgroundColor(color.primary)
    // }
    return <ThemeContext.Provider value={{ color, typography }}>{children}</ThemeContext.Provider>
  }

  return { ThemeContext, ThemeProvider }
}

export default createTheme
