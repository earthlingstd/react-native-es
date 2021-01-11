/// <reference path="../../typings/lib.d.ts" />
/// <reference path="../../typings/theme.d.ts" />

import React from 'react'
import { StatusBar } from 'react-native'
// import { Platform, StatusBar, useWindowDimensions } from 'react-native'

import * as DefaultTheme from './ThemeConfig'
import useTheme from './useTheme'
import withTheme from './withTheme'

interface CreateThemeParams<T> {
  colors?: L.KV<Theme.Color & T>
  typographies?: L.KV<Theme.Typography>
  fonts?: L.Fonts
  defaultColor?: string
  defaultTypography?: 'normal' | 'small' | 'medium'
}

export type ThemeContextType<T> = {
  color: Theme.Color & T
  typography: Theme.Typography
  fonts: L.Fonts
}

export let ThemeContext: any
export let ThemeProvider: any

function createTheme<T>(params: CreateThemeParams<T>) {
  const {
    colors = DefaultTheme.colors as L.KV<Theme.Color & T>,
    typographies = DefaultTheme.typographies,
    fonts = DefaultTheme.fonts!,
    defaultColor = 'light',
    defaultTypography = 'normal',
  } = params

  // Default value
  const _color = colors[defaultColor]
  const _typography = typographies[defaultTypography]

  // Create context
  ThemeContext = React.createContext<ThemeContextType<T>>({
    color: _color,
    typography: _typography,
    fonts,
  })

  // Create provider
  ThemeProvider = ({ colorKey, typographyKey, children }) => {
    const color = colors[colorKey] || _color
    const typography = typographies[typographyKey] || _typography
    // const dim = useWindowDimensions()

    StatusBar.setBarStyle(color.barStyle)
    // StatusBar.setHidden(dim.width > dim.height, 'slide')
    // if (Platform.OS === 'android') {
    //   StatusBar.setBackgroundColor(color.primary)
    // }
    return (
      <ThemeContext.Provider value={{ color, typography, fonts }}>{children}</ThemeContext.Provider>
    )
  }

  const ut = () => {
    return useTheme<T>()
  }

  return { ThemeContext, ThemeProvider, useTheme: ut, withTheme }
}

export default createTheme
