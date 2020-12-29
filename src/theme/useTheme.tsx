import React from 'react'
import { ThemeContext, ThemeContextType } from './createTheme'

function useTheme<T>(): ThemeContextType<T> {
  const { color, typography, fonts } = React.useContext<ThemeContextType<T>>(ThemeContext)
  return { color, typography, fonts }
}
export default useTheme
