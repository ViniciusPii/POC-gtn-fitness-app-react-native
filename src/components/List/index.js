import React from 'react';

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

export default List;
