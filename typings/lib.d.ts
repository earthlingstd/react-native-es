/// <reference types="typescript" />
// Lib
declare namespace L {
  // Key-Value
  export type KV<T> = { [key: string]: T }

  export type Font = {
    fontFamily: string
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  }

  export type Fonts = {
    regular: Font
    medium: Font
    light: Font
    thin: Font
  }
}
