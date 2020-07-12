import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

import Card from '../Card';

const List = ({ data, keyExtractor, selectedMonth }) => {
  return (
    <S.List
      data={data}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Card data={item} selectedMonth={selectedMonth} />
      )}
    />
  );
};

List.propTypes = {
  data: PropTypes.node.isRequired,
  keyExtractor: PropTypes.string.isRequired,
  selectedMonth: PropTypes.number.isRequired,
};

export default List;
