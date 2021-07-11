import { Platform } from 'react-native'

export const typographies: L.KV<Theme.Typography> = {
  normal: {
    footnote: 13,
    subhead: 15,
    body: 16,
    h3: 18,
    h2: 20,
    h1: 22,
    largeTitle: 28,
  },
  small: {
    footnote: 11,
    subhead: 13,
    body: 14,
    h3: 16,
    h2: 18,
    h1: 20,
    largeTitle: 25,
  },
  medium: {
    footnote: 14,
    subhead: 16,
    body: 17,
    h3: 19,
    h2: 21,
    h1: 23,
    largeTitle: 29,
  },
}

export const colors: L.KV<Theme.Color> = {
  light: {
    id: 'light',
    dark: false,
    name: 'Light',

    primary: '#EF9517',
    secondary: '#303D4F',
    // Header
    header: '#FFF', // 1C6786 394860
    headerText: '#121417',

    background: '#FFFFFF',
    separator: '#F4F8FB',
    middle: '#FFFFFF',
    text: '#202328',
    shadowColor: '#3E3E3E',
    gray: '#2D3239',
    gray2: '#48505B',
    gray3: '#636E7D',
    gray4: '#7E8C9F',
    gray5: '#99AAC1',
    gray6: '#f2f2f7',
    white: '#FFFFFF',
    barStyle: 'dark-content',
  },
}

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '400' as '400',
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '500' as '500',
    },
    semiBold: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '600' as '600',
    },
    bold: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '700' as '700',
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '300' as '300',
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '100' as '100',
    },
  },
  ios: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400' as '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500' as '500',
    },
    semiBold: {
      fontFamily: 'System',
      fontWeight: '600' as '600',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700' as '700',
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300' as '300',
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '100' as '100',
    },
  },
  android: {
    regular: {
      fontFamily: 'Raleway-Regular',
      fontWeight: 'normal' as 'normal',
    },
    medium: {
      fontFamily: 'Raleway-Medium',
      fontWeight: 'normal' as 'normal',
    },
    semiBold: {
      fontFamily: 'Raleway-SemiBold',
      fontWeight: 'normal' as 'normal',
    },
    bold: {
      fontFamily: 'Raleway-Bold',
      fontWeight: 'normal' as 'normal',
    },
    light: {
      fontFamily: 'Raleway-Light',
      fontWeight: 'normal' as 'normal',
    },
    thin: {
      fontFamily: 'Raleway-Thin',
      fontWeight: 'normal' as 'normal',
    },
  },
}

const newLocal = { ...fontConfig }
export const fonts = Platform.select<L.Fonts>(newLocal)
