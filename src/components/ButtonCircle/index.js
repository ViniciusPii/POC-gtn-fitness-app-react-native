import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

import * as S from './styles';

const ButtonCircle = ({ onPress }) => {
  return (
    <S.Button onPress={onPress}>
      <Icon name="plus" color="#fff" />
    </S.Button>
  );
};

ButtonCircle.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ButtonCircle;
