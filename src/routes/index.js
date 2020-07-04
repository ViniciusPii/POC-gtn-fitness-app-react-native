import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/useAuth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return !signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
