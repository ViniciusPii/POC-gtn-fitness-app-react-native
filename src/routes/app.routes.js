import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/App/Home';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ gestureEnabled: false }}>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#222',
          headerTitleAlign: 'center',
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
