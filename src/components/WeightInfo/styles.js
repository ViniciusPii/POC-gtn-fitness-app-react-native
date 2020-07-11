import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  width: 100%;
  padding: 20px;
`;

export const WeightDesc = styled.Text`
  font-size: 12px;
`;

export const WeightContent = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Weight = styled.Text`
  font-size: 40px;
`;

export const WeightKg = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
  padding-left: 3px;
`;

export const IconInfo = styled(Icon)`
  padding-left: 10px;
  margin-bottom: 8px;
`;
