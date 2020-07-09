import React from 'react';
import { Platform } from 'react-native';

import PropTypes from 'prop-types';

import * as S from './styles';

const Layout = ({ children }) => {
  return (
    <S.Container enabled behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      {children}
    </S.Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
