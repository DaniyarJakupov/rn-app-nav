import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TabScreenOne from '../screens/TabScreenOne';
import TabScreenTwo from '../screens/TabScreenTwo';

const TabNavigator = createBottomTabNavigator(
  {
    TabScreenOne: {
      screen: TabScreenOne,
      navigationOptions: {
        tabBarLabel: 'Tab 1',
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="home"
              size={32}
              color={focused ? 'crimson' : 'lightblue'}
            />
          );
        },
      },
    },
    TabScreenTwo: {
      screen: TabScreenTwo,
      navigationOptions: {
        tabBarLabel: 'Tab 2',
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="settings"
              size={32}
              color={focused ? 'crimson' : 'lightblue'}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
  },
);

export default createAppContainer(TabNavigator);
