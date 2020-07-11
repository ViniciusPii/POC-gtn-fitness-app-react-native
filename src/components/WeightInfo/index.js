import React from 'react';
import PropTypes from 'prop-types';

import { iconInfo } from '../../mocks';

import * as S from './styles';

const WeightInfo = ({ fatPercentage, weight }) => {
  const currentFatPercentage = fatPercentage[fatPercentage.length - 1];
  const oldFatPercentage = fatPercentage[fatPercentage.length - 2];

  const changeWeightInfo = () => {
    if (currentFatPercentage > oldFatPercentage) {
      return 'up';
    }
    if (currentFatPercentage < oldFatPercentage) {
      return 'down';
    }
    if (currentFatPercentage === oldFatPercentage) {
      return 'draw';
    }
    return 'init';
  };

  return (
    <S.Container>
      {fatPercentage.length > 0 && (
        <>
          <S.WeightDesc>Peso Atual</S.WeightDesc>
          <S.WeightContent>
            <S.Weight>{weight[weight.length - 1]}</S.Weight>
            <S.WeightKg>kg</S.WeightKg>
            <S.IconInfo
              name={iconInfo[changeWeightInfo()].name}
              color={iconInfo[changeWeightInfo()].color}
              size={25}
            />
          </S.WeightContent>
        </>
      )}
    </S.Container>
  );
};

WeightInfo.propTypes = {
  fatPercentage: PropTypes.node.isRequired,
  weight: PropTypes.node.isRequired,
};

export default WeightInfo;
