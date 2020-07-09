import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Container = ({ children, w }) => {
  return <S.Container w={w}>{children}</S.Container>;
};

Container.defaultProps = {
  w: '85%',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  w: PropTypes.string,
};

export default Container;
