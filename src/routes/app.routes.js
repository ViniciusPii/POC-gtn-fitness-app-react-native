import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity } from 'react-native';
import { useAuth } from '../hooks/useAuth';

import Home from '../views/App/Home';
import NewWeight from '../views/App/NewWeight';

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
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 20 }} onPress={logout}>
              <Icon name="sign-out-alt" size={20} color="#222" />
            </TouchableOpacity>
          ),
        }}
      />
      <AppStack.Screen
        name="NewWeight"
        component={NewWeight}
        options={{
          title: 'Cadastre suas Medidas',
          headerBackTitleVisible: false,
          headerTintColor: '#222',
          headerTitleAlign: 'center',
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
