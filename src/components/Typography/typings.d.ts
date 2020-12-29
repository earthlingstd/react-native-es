export type AccessibilityTrait =
  | 'none'
  | 'button'
  | 'link'
  | 'header'
  | 'search'
  | 'image'
  | 'selected'
  | 'plays'
  | 'key'
  | 'text'
  | 'summary'
  | 'disabled'
  | 'frequentUpdates'
  | 'startsMedia'
  | 'adjustable'
  | 'allowsDirectInteraction'
  | 'pageTurn'

export type TextProps = {
  numberOfLines?: number
  accessible?: boolean
  accessibilityTraits?: AccessibilityTrait | AccessibilityTrait[]
  style?: StyleProp<TextStyle>
  weight?: keyof L.Fonts
  color?: string | keyof Theme.Color
}
