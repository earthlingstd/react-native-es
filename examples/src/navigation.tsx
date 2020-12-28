import React from 'react';
import Home from './screens/Home';
import Theme from './screens/Theme';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationBar} from '@earthling/react-native-es';

const Stack = createStackNavigator();

function CommonNavigationBar(props) {
  const {scene, navigation, previous, insets, route} = props;
  const {options} = scene.descriptor;
  console.log(options);
  const title =
    typeof options.headerTitle !== 'function' &&
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <NavigationBar.Header statusBarHeight={insets.top}>
      {previous && (
        <NavigationBar.Icon.Back onPress={() => navigation.goBack()} />
      )}
      <NavigationBar.Content title={title} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
