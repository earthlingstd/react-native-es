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
import {StyleSheet, View, StatusBar, TouchableOpacity} from 'react-native';
import ThemeProvider from './src/theme';

import useTheme from '@earthling/react-native-es/lib/theme/useTheme';
import Container from '@earthling/react-native-es/lib/components/Container';
import {Color} from './src/theme/config';

const Demo = ({onPress}) => {
  const {color} = useTheme<Color>();
  return (
    <View style={[styles.scrollView, {backgroundColor: color.primary}]}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 100,
          height: 44,
          backgroundColor: color.secondary,
          marginTop: 10,
        }}
      />
    </View>
  );
};

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <SafeAreaProvider>
      <ThemeProvider colorKey={theme}>
        <StatusBar barStyle="dark-content" />
        <Container safe>
          <Demo
            onPress={() => {
              setTheme((t) => {
                return t === 'light' ? 'dark' : 'light';
              });
            }}
          />
        </Container>
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
