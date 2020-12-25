export type Color = {
  id: string;
  name: string;
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
};

export const colors = {
  light: {
    id: 'light',
    name: 'Light',
    primary: '#ffffff',
    secondary: '#EF9517',
    header: '#FFF', // 1C6786 394860
    headerText: '#121417',
    background: '#FFFFFF',
    // separator: '#F4F8FB',
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
  dark: {
    id: 'light',
    name: 'Light',
    primary: '#000000',
    secondary: '#EF9517',
    header: '#FFF', // 1C6786 394860
    headerText: '#121417',
    background: '#FFFFFF',
    // separator: '#F4F8FB',
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
};
