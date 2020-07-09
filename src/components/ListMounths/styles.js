import styled from 'styled-components/native';

export const Container = styled.View``;

export const ScrollView = styled.ScrollView``;

export const Button = styled.TouchableOpacity`
  width: ${({ w }) => w};
  align-items: center;
  margin: 15px 0;
`;

export const ButtonContainer = styled.View`
  width: 90%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
