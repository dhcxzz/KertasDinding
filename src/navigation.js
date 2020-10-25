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
import Login from './screens/login';
import Splash from './screens/splash';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function bottom() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false, // change this to `false`
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false, // change this to `false`
          }}
        />
        <Stack.Screen
          options={({route, navigation}) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () => (
              <Ion
                name="log-out"
                color={'#2B4D59'}
                size={35}
                onPress={() => navigation.navigate('Login')}
              />
            ),
            headerTintColor: '#FFAA67',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Montserrat',
            },
            headerLeft: null,
          })}
          name="Home"
          component={tabBottom}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={() => ({
            headerTintColor: '#FFAA67',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Montserrat',
            },
            cardStyle: {backgroundColor: '#FFFFFF'},
          })}
        />
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
