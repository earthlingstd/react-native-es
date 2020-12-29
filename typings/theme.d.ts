/// <reference types="typescript" />
declare namespace Theme {
  export type Typography = {
    footnote: number
    subhead: number
    body: number
    h3: number
    h2: number
    h1: number
    largeTitle: number
  }

  export type Color = {
    id: string
    dark: boolean
    name: string

    primary: string
    secondary: string
    header: string
    headerText: string
    background: string
    middle: string
    text: string
    separator: string
    shadowColor: string
    gray: string
    gray2: string
    gray3: string
    gray4: string
    gray5: string
    gray6: string
    white: string
    barStyle: 'default' | 'light-content' | 'dark-content'
  }
}
