import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome5';

import firebase from '../../services/firebase';
import { months } from '../../mocks/months';

import * as S from './styles';

const Card = ({ data, weight }) => {
  const [bgColor, setBgColor] = useState('#222');

  useEffect(() => {
    if (weight[weight.length - 1] > weight[weight.length - 2]) {
      setBgColor('#e53535');
    }
    if (weight[weight.length - 1] < weight[weight.length - 2]) {
      setBgColor('#0f8c1f');
    } else {
      setBgColor('#222');
    }
  }, []);

  const handleDelete = () => {
    const { uid } = firebase.auth().currentUser;
    const today = new Date();

    firebase
      .database()
      .ref(today.getFullYear())
      .child(uid)
      .child(months[today.getMonth()])
      .child(data.key)
      .remove();
  };

  return (
    <S.Card bgColor={bgColor}>
      <S.CardContainer>
        <S.CardContent>
          <S.Title>Peso</S.Title>
          <S.Text>{data.weight}</S.Text>
        </S.CardContent>
        <S.CardContent>
          <S.Title>% Gord.</S.Title>
          <S.Text>{data.fatPercentage}</S.Text>
        </S.CardContent>
        <S.CardContent>
          <S.Title>Gordura kg</S.Title>
          <S.Text>{data.fatWeight}</S.Text>
        </S.CardContent>
        <S.CardContent>
          <S.IconButton onPress={handleDelete}>
            <Icon name="trash-alt" color="#fff" size={24} />
          </S.IconButton>
        </S.CardContent>
      </S.CardContainer>
    </S.Card>
  );
};

Card.propTypes = {
  data: PropTypes.node.isRequired,
  weight: PropTypes.node.isRequired,
};

export default Card;
