import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/Auth/Login';
import CreateAccount from '../views/Auth/CreateAccount';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={{ gestureEnabled: false }}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: 'Crie já sua Conta!',
          headerBackTitleVisible: false,
          headerTintColor: '#222',
          headerTitleAlign: 'center',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
