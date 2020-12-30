/**
 * Text Button Screen
 *
 * @format
 *
 */
import {Container, Button, Subheading} from '@earthling/react-native-es';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '../../theme';
import icons from './icons';

type Props = {};

const IconButton: React.FC<Props> = (props) => {
  const {color} = useTheme();

  return (
    <Container safe>
      <ScrollView
        style={{flex: 1, backgroundColor: color.background}}
        contentContainerStyle={{paddingHorizontal: 16}}>
        <Subheading
          color="gray4"
          weight="medium"
          style={{marginTop: 10, marginBottom: 5}}>
          mode="flat"
        </Subheading>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {Object.keys(icons).map((icon) => (
            <Button.Icon
              key={`flat-${icon}`}
              mode="flat"
              icon={icon}
              size={24}
              style={{marginHorizontal: 4, marginVertical: 4}}
            />
          ))}
        </View>

        {/* <Subheading
          color="gray4"
          weight="medium"
          style={{marginTop: 10, marginBottom: 5}}>
          mode="outlined"
        </Subheading>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {Object.keys(icons).map((icon) => (
            <Button.Icon
              key={`outlined-${icon}`}
              mode="outlined"
              icon={icon}
              size={24}
              style={{marginHorizontal: 4, marginVertical: 4}}
            />
          ))}
        </View>

        <Subheading
          color="gray4"
          weight="medium"
          style={{marginTop: 10, marginBottom: 5}}>
          mode="contained"
        </Subheading>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {Object.keys(icons).map((icon) => (
            <Button.Icon
              key={`contained-${icon}`}
              mode="contained"
              icon={icon}
              size={24}
              style={{marginHorizontal: 4, marginVertical: 4}}
            />
          ))}
        </View> */}
      </ScrollView>
    </Container>
  );
};

IconButton.defaultProps = {};

const s = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});

export default IconButton;
