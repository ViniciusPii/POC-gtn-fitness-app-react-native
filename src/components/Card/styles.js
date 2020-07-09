import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  margin: 5px 0;
  border-radius: 8px;
  background-color: #222;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const CardContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const IconButton = styled.TouchableOpacity``;
