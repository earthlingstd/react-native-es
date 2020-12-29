/**
 * Home Screen
 *
 * @format
 *
 */
import cc from 'color';
import {Container, Text} from '@earthling/react-native-es';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '../../theme';
import {Color} from '../../theme/config';

type Props = {};

const Row = ({name}: {name: keyof Color}) => {
  const {color} = useTheme();
  return (
    <View
      style={{
        backgroundColor: color[name],
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.gray3,
        marginBottom: 10,
      }}>
      <Text
        weight="medium"
        style={{
          color: cc(color[name]).isLight() ? 'black' : 'white',
        }}>{`${name} - ${color[name]}`}</Text>
    </View>
  );
};

const HomeScreen: React.FC<Props> = (props) => {
  const {color} = useTheme();

  return (
    <Container safe>
      <ScrollView style={[{flex: 1, backgroundColor: color.background}]}>
        <Row name="primary" />
        <Row name="secondary" />

        <Row name="header" />
        <Row name="headerText" />
        <Row name="background" />

        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: 15,
            marginHorizontal: 15,
            borderRadius: 10,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: color.gray3,
            marginBottom: 10,
            paddingVertical: 15,
          }}>
          <Text weight="medium" style={s.text}>{`text - ${color.text}`}</Text>
          <Text
            weight="medium"
            color="gray"
            style={s.text}>{`gray - ${color.gray}`}</Text>
          <Text
            weight="medium"
            color="gray2"
            style={s.text}>{`gray2 - ${color.gray2}`}</Text>
          <Text
            weight="medium"
            color="gray3"
            style={s.text}>{`gray3 - ${color.gray3}`}</Text>
          <Text
            weight="medium"
            color="gray4"
            style={s.text}>{`gray4 - ${color.gray4}`}</Text>
          <Text
            weight="medium"
            color="gray5"
            style={s.text}>{`gray5 - ${color.gray5}`}</Text>
          <Text weight="medium" color="gray6">{`gray6 - ${color.gray6}`}</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

HomeScreen.defaultProps = {};

const s = StyleSheet.create({
  text: {
    marginBottom: 15,
  },
});

export default HomeScreen;
