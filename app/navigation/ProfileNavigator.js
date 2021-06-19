import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/Profile';
import CovidScreen from '../components/CovidScreen';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='CovidScreen' component={CovidScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileNavigator;
