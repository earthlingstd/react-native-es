/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, StatusBar} from 'react-native';
import ThemeProvider from './src/theme';

import Navigation from './src/navigation';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <SafeAreaProvider>
      <ThemeProvider colorKey={theme}>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
