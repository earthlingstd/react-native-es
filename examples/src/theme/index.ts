import {Color, colors} from './config';
import {createTheme} from '@earthling/react-native-es';

export const {ThemeProvider, ThemeContext, useTheme} = createTheme<Color>({
  colors,
});
