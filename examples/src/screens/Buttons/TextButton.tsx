/**
 * Text Button Screen
 *
 * @format
 *
 */
import {Container, Button, Icon, Subheading} from '@earthling/react-native-es';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '../../theme';

type Props = {};

const TextButton: React.FC<Props> = (props) => {
  const {color} = useTheme();

  return (
    <Container safe>
      <ScrollView
        style={[
          {flex: 1, backgroundColor: color.background, paddingHorizontal: 15},
        ]}>
        <Subheading
          color="gray4"
          weight="medium"
          style={{marginTop: 10, marginBottom: 5}}>
          mode="flat"
        </Subheading>
        <Button.Text style={s.button}>Active</Button.Text>
        <Button.Text disabled style={s.button}>
          Disabled
        </Button.Text>

        <Subheading
          color="gray4"
          weight="medium"
          style={{marginTop: 30, marginBottom: 5}}>
          mode="outlined"
        </Subheading>
        <Button.Text mode="outlined" style={s.button}>
          Active
        </Button.Text>
        <Button.Text mode="outlined" disabled style={s.button}>
          Disabled
        </Button.Text>

        <Subheading
          color="gray4"
          weight="medium"
          style={{marginTop: 30, marginBottom: 5}}>
          mode="contained"
        </Subheading>
        <Button.Text mode="contained" style={s.button}>
          Active
        </Button.Text>
        <Button.Text mode="contained" disabled style={s.button}>
          Disabled
        </Button.Text>
        <Subheading
          color="gray4"
          weight="medium"
          style={{marginTop: 30, marginBottom: 5}}>
          custom
        </Subheading>
        <Button.Text mode="flat" style={s.button}>
          Icon right
          <Icon source="users" size={18} />
        </Button.Text>
        <Button.Text mode="outlined" style={s.button}>
          <Icon source="chevron-left" size={24} />
          Icon left
        </Button.Text>
        <Button.Text mode="contained" uppercase style={s.button}>
          Uppercase
        </Button.Text>
      </ScrollView>
    </Container>
  );
};

TextButton.defaultProps = {};

const s = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});

export default TextButton;
