import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Both = ({ children }) => {
  return <S.Both>{children}</S.Both>;
};

Both.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Both;
