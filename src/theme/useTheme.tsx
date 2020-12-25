import React from 'react'
import { ThemeContext, ThemeContextType } from './createTheme'

function useTheme<T>(): ThemeContextType<T> {
  const { color, typography } = React.useContext<ThemeContextType<T>>(ThemeContext)
  return { color, typography }
}
export default useTheme
