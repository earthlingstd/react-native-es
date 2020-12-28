/**
 * Home Screen
 *
 * @format
 *
 */
import {Container, NavigationBar} from '@earthling/react-native-es';
import {Theme} from '@earthling/react-native-es';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../../theme/config';

type Props = {};

const HomeScreen: React.FC<Props> = (props) => {
  const {color} = Theme.useTheme<Color>();

  return (
    <Container safe>
      <View style={[{flex: 1, backgroundColor: color.primary}]}>
        <TouchableOpacity
          style={{
            height: 44,
            backgroundColor: color.secondary,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => props.navigation.navigate('Theme')}>
          <Text>Colors</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

HomeScreen['navigationOptions'] = (screenProps) => ({
  title: 'Test',
});

const s = StyleSheet.create({});

export default HomeScreen;
