/* eslint-disable no-console */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import colors from './themes/colors';
import { AppProvider } from './components';
import Routes from './routes';

console.disableYellowBox = true;

const App = () => {
  return (
    <AppProvider theme={colors}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
