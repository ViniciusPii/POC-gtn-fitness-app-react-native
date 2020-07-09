import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Layout = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
