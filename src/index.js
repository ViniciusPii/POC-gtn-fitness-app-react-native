/* eslint-disable no-console */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import AuthProvider from './hooks/useAuth';

console.disableYellowBox = true;

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
