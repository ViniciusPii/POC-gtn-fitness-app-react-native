import React from 'react';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import AuthProvider from '../../hooks/useAuth';

const AppProvider = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.node.isRequired,
};

export default AppProvider;
