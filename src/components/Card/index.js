import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome5';

import firebase from '../../services/firebase';
import { months } from '../../mocks/months';

import * as S from './styles';

const Card = ({ data, weight }) => {
  const [bgColor, setBgColor] = useState('#ccc');

  const [oldWeight, setOldweight] = useState();
  const [currentweight, setCurrentWeight] = useState();

  const changeColor = () => {
    setOldweight(weight[weight.length - 2]);
    setCurrentWeight(weight[weight.length - 1]);

    if (currentweight > oldWeight) {
      setBgColor('#e53535');
    } else if (currentweight < oldWeight) {
      setBgColor('#0f8c1f');
    } else if (currentweight === oldWeight) {
      setBgColor('#ffd000');
    } else {
      setBgColor('#ccc');
    }

    return bgColor;
  };

  // weight.forEach((value) => {
  //   if (value[value.length - 1] > value[value.length - 2]) {
  //     setBgColor('#e53535');
  //   }
  //   if (value[value.length - 1] < value[value.length - 2]) {
  //     setBgColor('#0f8c1f');
  //   }
  //   if (value[value.length - 1] === value[value.length - 2]) {
  //     setBgColor('#ffd000');
  //   }
  //   setBgColor('#ccc');
  // }, []);

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
    <S.Card>
      <S.CardContainer>
        <S.CardContent>
          <S.CardInfo bgColor={changeColor} />
        </S.CardContent>
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
