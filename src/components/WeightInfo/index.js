import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const WeightInfo = ({ weight }) => {
  const [bgColor, setBgColor] = useState('#222');
  const [nameIcon, setNameIcon] = useState();

  useEffect(() => {
    if (weight[weight.length - 1] > weight[weight.length - 2]) {
      setBgColor('#e53535');
      setNameIcon('arrow-circle-up');
    } else if (weight[weight.length - 1] < weight[weight.length - 2]) {
      setBgColor('#0f8c1f');
      setNameIcon('arrow-circle-down');
    } else if (weight[weight.length - 1] === weight[weight.length - 2]) {
      setBgColor('#ffd000');
      setNameIcon('minus-circle');
    } else {
      setNameIcon();
    }
  });

  return (
    <S.Container>
      {weight.length > 0 && (
        <>
          <S.WeightDesc>Peso Atual</S.WeightDesc>
          <S.WeightContent>
            <S.Weight>{weight[weight.length - 1]}</S.Weight>
            <S.WeightKg>kg</S.WeightKg>
            <S.IconInfo name={nameIcon} color={bgColor} size={25} />
          </S.WeightContent>
        </>
      )}
    </S.Container>
  );
};

WeightInfo.propTypes = {
  weight: PropTypes.node.isRequired,
};

export default WeightInfo;
