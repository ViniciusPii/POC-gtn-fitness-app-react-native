import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/Auth/Login';
import CreateAccount from '../views/Auth/CreateAccount';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
