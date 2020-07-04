import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import AuthProvider from './hooks/useAuth';

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
