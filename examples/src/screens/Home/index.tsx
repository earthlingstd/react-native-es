/**
 * Home Screen
 *
 * @format
 *
 */
import {Container, Button} from '@earthling/react-native-es';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../theme';

type Props = {};

const HomeScreen: React.FC<Props> = (props) => {
  const {color} = useTheme();

  return (
    <Container safe>
      <View style={[{flex: 1, backgroundColor: color.background}]}>
        <Button.Text onPress={() => props.navigation.navigate('Buttons')}>
          Buttons
        </Button.Text>
        <Button.Text onPress={() => props.navigation.navigate('Theme')}>
          Theme
        </Button.Text>
        {/* <TouchableOpacity
          style={{
            height: 44,
            backgroundColor: color.secondary,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => props.navigation.navigate('Theme')}>
          <Text>Colors</Text>
        </TouchableOpacity> */}
      </View>
    </Container>
  );
};

HomeScreen['navigationOptions'] = (screenProps) => ({
  title: 'Home',
});

const s = StyleSheet.create({});

export default HomeScreen;
