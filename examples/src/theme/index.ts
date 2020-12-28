import {Color, colors} from './config';
import {Theme} from '@earthling/react-native-es';

const {ThemeProvider, ThemeContext} = Theme.createTheme<Color>({colors});
console.log(ThemeProvider, Theme.ThemeContext);
export default ThemeProvider;
