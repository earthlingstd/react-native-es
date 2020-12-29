/**
 * Home Screen
 *
 * @format
 *
 */
import {Container, Button, Text, Subheading} from '@earthling/react-native-es';
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
        <Text weight="medium" style={{marginTop: 10}}>
          Button.Text
        </Text>
        <Subheading color="gray4" weight="medium">
          mode="flat"
        </Subheading>
        <Button.Text style={s.button}>Active</Button.Text>
        <Button.Text uppercase style={s.button}>
          uppercase
        </Button.Text>
        <Button.Text disabled style={s.button}>
          Disabled
        </Button.Text>
        <Text weight="medium" style={{marginTop: 20}}>
          Button.Text
        </Text>
        <Subheading color="gray4" weight="medium">
          mode="outlined"
        </Subheading>
        <Button.Text mode="outlined" style={s.button}>
          Active
        </Button.Text>
        <Button.Text mode="outlined" style={s.button} uppercase>
          uppercase
        </Button.Text>
        <Button.Text mode="outlined" disabled style={s.button}>
          Disabled
        </Button.Text>
        <Text weight="medium" style={{marginTop: 20}}>
          Button.Text
        </Text>
        <Subheading color="gray4" weight="medium">
          mode="contained"
        </Subheading>
        <Button.Text mode="contained" style={s.button}>
          Active
        </Button.Text>
        <Button.Text mode="contained" uppercase style={s.button}>
          uppercase
        </Button.Text>
        <Button.Text mode="contained" disabled style={s.button}>
          Disabled
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
