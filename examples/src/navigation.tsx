import React from 'react';
import Home from './screens/Home';
import Theme from './screens/Theme';
import Chip from './screens/Chip';
import * as Buttons from './screens/Buttons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationBar} from '@earthling/react-native-es';

const Stack = createStackNavigator();

function CommonNavigationBar(props) {
  const {scene, navigation, previous, insets, route} = props;
  const {options} = scene.descriptor;

  const title =
    typeof options.headerTitle !== 'function' &&
    (options.headerTitle || options.title || scene.route.name);
  return (
    <NavigationBar.Header statusBarHeight={insets.top}>
      {previous && (
        <NavigationBar.Icon.Back onPress={() => navigation.goBack()} />
      )}
      <NavigationBar.Content title={title} />
      {options.headerRight ? options.headerRight() : null}
    </NavigationBar.Header>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{header: (props) => <CommonNavigationBar {...props} />}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={Home.navigationOptions}
        />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Chip" component={Chip} />
        <Stack.Screen name="Buttons" component={Buttons.List} />
        <Stack.Screen
          name="TextButton"
          component={Buttons.TextButton}
          options={{title: 'Button.Text'}}
        />
        <Stack.Screen
          name="IconButton"
          component={Buttons.IconButton}
          options={{title: 'Button.Icon'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
