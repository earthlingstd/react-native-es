import {Color, colors} from './config';
import Theme from '@earthling/react-native-es/lib/theme';

const {ThemeProvider, ThemeContext} = Theme.createTheme<Color>({colors});
console.log(ThemeProvider, Theme.ThemeContext);
export default ThemeProvider;
