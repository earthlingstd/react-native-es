import color from 'color';

export type Color = {
  id: string;
  name: string;
  dark: boolean;
  primary: string;
  secondary: string;
  header: string;
  headerText: string;
  background: string;
  middle: string;
  text: string;
  shadowColor: string;
  gray: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  white: string;
  barStyle: 'default' | 'light-content' | 'dark-content';
  customColor: string;
};

export const colors: L.KV<Color> = {
  light: {
    id: 'light',
    name: 'Light',
    dark: false,
    barStyle: 'dark-content',

    primary: '#1976D2',
    secondary: '#FFFFFF',

    header: '#FFF', // 1C6786 394860
    headerText: '#121417',
    background: '#FFFFFF',

    // separator: '#F4F8FB',
    white: '#FFFFFF',
    middle: '#FFFFFF',
    shadowColor: '#3E3E3E',

    text: '#202328',
    gray: color('#FFFFFF').mix(color('#202328'), 0.66).hex(),
    gray2: color('#FFFFFF').mix(color('#202328'), 0.56).hex(),
    gray3: color('#FFFFFF').mix(color('#202328'), 0.46).hex(),
    gray4: color('#FFFFFF').mix(color('#202328'), 0.36).hex(),
    gray5: color('#FFFFFF').mix(color('#202328'), 0.26).hex(),
    gray6: color('#FFFFFF').mix(color('#202328'), 0.16).hex(),

    customColor: '#FF00FF',
  },
  dark: {
    id: 'dark',
    name: 'Dark',
    dark: true,
    barStyle: 'light-content',

    primary: '#42A5F5',
    secondary: '#121212',

    header: '#121212', // 1C6786 394860
    headerText: '#FFF',

    background: '#121212',
    // separator: '#F4F8FB',
    middle: '#FFFFFF',
    shadowColor: '#3E3E3E',

    text: '#FFFFFF',
    gray: color('#121212').mix(color('#FFFFFF'), 0.66).hex(),
    gray2: color('#121212').mix(color('#FFFFFF'), 0.56).hex(),
    gray3: color('#121212').mix(color('#FFFFFF'), 0.46).hex(),
    gray4: color('#121212').mix(color('#FFFFFF'), 0.36).hex(),
    gray5: color('#121212').mix(color('#FFFFFF'), 0.26).hex(),
    gray6: color('#121212').mix(color('#FFFFFF'), 0.16).hex(),
    white: '#FFFFFF',

    customColor: '#FF00FF',
  },
};
