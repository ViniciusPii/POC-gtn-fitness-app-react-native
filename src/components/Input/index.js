/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Input = ({ ...props }) => {
  return <S.Input {...props} />;
};

Input.propTypes = {
  props: PropTypes.node.isRequired,
};

export default Input;
