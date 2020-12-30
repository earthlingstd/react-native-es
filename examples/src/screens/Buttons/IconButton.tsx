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

const modes = ['flat', 'outlined', 'contained'];

type Props = {navigation: any};

const IconButton: React.FC<Props> = (props) => {
  const {color} = useTheme();
  const {navigation} = props;

  const [mode, setMode] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Button.Icon',
      headerRight: () => (
        <Button.Text onPress={() => setMode((c) => (c + 1) % 3)}>
          Change mode
        </Button.Text>
      ),
    });
  }, [navigation]);

  return (
    <Container safe>
      <ScrollView
        style={{flex: 1, backgroundColor: color.background}}
        contentContainerStyle={{paddingHorizontal: 16}}>
        <Subheading
          color="gray4"
          weight="medium"
          style={{marginTop: 10, marginBottom: 5}}>
          mode="{modes[mode]}"
        </Subheading>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {Object.keys(icons).map((icon) => (
            <Button.Icon
              key={`${icon}`}
              mode={modes[mode]}
              icon={icon}
              size={24}
              style={{marginHorizontal: 4, marginVertical: 4}}
            />
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

const s = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});

export default IconButton;
