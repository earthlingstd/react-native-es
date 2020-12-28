/**
 * Home Screen
 *
 * @format
 *
 */
import {Container, NavigationBar} from '@earthling/react-native-es';
import useTheme from '@earthling/react-native-es/lib/theme/useTheme';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Color} from '../../theme/config';

type Props = {};

const HomeScreen: React.FC<Props> = (props) => {
  const {color} = useTheme<Color>();

  return (
    <Container safe>
      <NavigationBar.Header statusBarHeight={0}>
        <NavigationBar.Action />
        <NavigationBar.Content title="text" largeTitle />
      </NavigationBar.Header>
      <View style={[{flex: 1, backgroundColor: color.primary}]}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 44,
            backgroundColor: color.secondary,
            marginTop: 10,
          }}
        />
      </View>
    </Container>
  );
};

HomeScreen.defaultProps = {};

const s = StyleSheet.create({});

export default HomeScreen;
