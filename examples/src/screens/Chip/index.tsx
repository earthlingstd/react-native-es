/**
 * Home Screen
 *
 * @format
 *
 */
import {Container, Chip} from '@earthling/react-native-es';
import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useTheme} from '../../theme';

type Props = {};

const ChipScreen: React.FC<Props> = (props) => {
  const {color} = useTheme();

  return (
    <Container safe>
      <ScrollView
        style={[
          {flex: 1, backgroundColor: color.background, paddingHorizontal: 15},
        ]}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Chip style={s.chip}>Test</Chip>
          <Chip style={s.chip} icon="users">
            Icon
          </Chip>
          <Chip style={s.chip} icon="users" selected>
            Icon Selected
          </Chip>
          <Chip style={s.chip} icon="users" disabled selected>
            Icon Disabled
          </Chip>
        </View>
      </ScrollView>
    </Container>
  );
};

ChipScreen.defaultProps = {};

const s = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  chip: {
    marginLeft: 8,
    marginBottom: 5,
  },
});

export default ChipScreen;
