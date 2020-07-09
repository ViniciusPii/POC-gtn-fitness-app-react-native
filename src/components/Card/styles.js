import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  border-radius: 8px;
  background-color: #222;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const CardContent = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;
