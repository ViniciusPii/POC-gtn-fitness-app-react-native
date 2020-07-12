import React, { useRef, useEffect } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styles';

import { months } from '../../mocks';

const ListMonths = ({ selectedMonth, setSelectedMonth }) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const thirdW = screenWidth / 3;
  const MonthRef = useRef();

  const handleScrollEnd = (e) => {
    const posX = e.nativeEvent.contentOffset.x;
    const targetMonth = Math.round(posX / thirdW);
    setSelectedMonth(targetMonth);
  };

  const scrollToMonth = (m) => {
    const posX = m * thirdW;
    MonthRef.current.scrollTo({ x: posX, y: 0, animated: true });
  };

  useEffect(() => {
    setTimeout(() => {
      scrollToMonth(selectedMonth);
    }, 1);
  }, [selectedMonth]);

  return (
    <S.Container>
      <S.ScrollView
        horizontal
        ref={MonthRef}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={thirdW}
        contentContainerStyle={{ paddingLeft: thirdW, paddingRight: thirdW }}
        onMomentumScrollEnd={handleScrollEnd}
      >
        {months.map((m, k) => (
          <S.Container>
            <S.Button key={m} onPress={() => setSelectedMonth(k)} w={thirdW}>
              <S.ButtonContainer
                bgColor={k === selectedMonth ? '#0065ff' : '#222'}
              >
                <S.ButtonText>{m}</S.ButtonText>
              </S.ButtonContainer>
            </S.Button>
          </S.Container>
        ))}
      </S.ScrollView>
    </S.Container>
  );
};

ListMonths.propTypes = {
  selectedMonth: PropTypes.number.isRequired,
  setSelectedMonth: PropTypes.func.isRequired,
};

export default ListMonths;
