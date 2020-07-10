import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

import Card from '../Card';

const List = ({ data, keyExtractor, weight }) => {
  return (
    <S.List
      data={data}
      weight={weight}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Card data={item} weight={weight} />}
    />
  );
};

List.propTypes = {
  data: PropTypes.node.isRequired,
  keyExtractor: PropTypes.string.isRequired,
};

export default List;
