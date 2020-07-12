import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome5';

import firebase from '../../services/firebase';
import { months } from '../../mocks/months';

import * as S from './styles';

const Card = ({ data, selectedMonth }) => {
  const handleDelete = () => {
    const { uid } = firebase.auth().currentUser;
    const today = new Date();

    firebase
      .database()
      .ref(today.getFullYear())
      .child(uid)
      .child(months[selectedMonth])
      .child(data.key)
      .remove();

    firebase.database().ref('weights').child(uid).child(data.key).remove();
  };

  return (
    <S.Card>
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
  selectedMonth: PropTypes.number.isRequired,
};

export default Card;
