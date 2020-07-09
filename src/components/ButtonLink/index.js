import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Button = ({ onPress, text }) => {
  return (
    <S.Button onPress={onPress}>
      <S.TextButton>{text}</S.TextButton>
    </S.Button>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
