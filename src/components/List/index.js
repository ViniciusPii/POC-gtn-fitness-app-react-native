import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

import Card from '../Card';

const List = ({ data, keyExtractor }) => {
  return (
    <S.List
      data={data}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Card data={item} />}
    />
  );
};

List.propTypes = {
  data: PropTypes.node.isRequired,
  keyExtractor: PropTypes.string.isRequired,
};

export default List;
