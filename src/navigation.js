import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ion from 'react-native-vector-icons/Ionicons';

import Home from './screens/home';
import Detail from './screens/detail';
import About from './screens/about';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function bottom() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            headerTintColor: '#FFAA67',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Montserrat',
            },
          })}
          name="Home"
          component={tabBottom}
        />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default bottom;

const tabBottom = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Ion name="home" color={'#FFAA67'} size={35} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: () => (
            <Ion name="information-circle" color={'#FFAA67'} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'images';
    case 'About':
      return 'about';
  }
}
