import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Card = ({ data }) => {
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
          <S.Title>Peso</S.Title>
          <S.Text>{data.fatWeight}</S.Text>
        </S.CardContent>
      </S.CardContainer>
    </S.Card>
  );
};

Card.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Card;
