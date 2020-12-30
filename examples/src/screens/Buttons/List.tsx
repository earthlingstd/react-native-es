/**
 * Home Screen
 *
 * @format
 *
 */
import {Container, Button} from '@earthling/react-native-es';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '../../theme';

type Props = {};

const HomeScreen: React.FC<Props> = (props) => {
  const {color} = useTheme();

  return (
    <Container safe>
      <ScrollView
        style={[
          {flex: 1, backgroundColor: color.background, paddingHorizontal: 15},
        ]}>
        <Button.Text
          style={s.button}
          onPress={() => props.navigation.navigate('TextButton')}>
          Button.Text
        </Button.Text>
        <Button.Text
          style={s.button}
          onPress={() => props.navigation.navigate('IconButton')}>
          Button.Icon
        </Button.Text>
      </ScrollView>
    </Container>
  );
};

HomeScreen.defaultProps = {};

const s = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
