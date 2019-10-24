import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OrganizationsScreen from '../screens/Organization';
import AddItemScreen from '../screens/AddItem';
import Login from '../screens/Login';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    // Home: HomeScreen,
    Home: Login,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const OrganizationsStack = createStackNavigator(
  {
    Organizations: OrganizationsScreen,
  },
  config
);

OrganizationsStack.navigationOptions = {
  tabBarLabel: 'Organizacje',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

OrganizationsStack.path = '';

const AddItemStack = createStackNavigator(
  {
    Settings: AddItemScreen,
  },
  config
);

AddItemStack.navigationOptions = {
  tabBarLabel: 'Dodaj',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

AddItemStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  OrganizationsStack,
  AddItemStack,
});

tabNavigator.path = '';

export default tabNavigator;
