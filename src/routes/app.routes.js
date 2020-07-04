import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../contexts/auth.context';

import Home from '../views/App/Home';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  const { logout } = useAuth();

  return (
    <AppStack.Navigator screenOptions={{ gestureEnabled: false }}>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#222',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 20 }} onPress={logout}>
              <Text>Sair</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
