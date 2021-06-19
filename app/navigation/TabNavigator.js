import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Главная'
        component={Home}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Профиль'
        component={ProfileNavigator}
        initialParams={{ icon: 'user' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
