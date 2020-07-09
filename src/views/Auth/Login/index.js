import React, { useState } from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  Layout,
  Container,
  Button,
  ButtonLink,
  Input,
  Both,
} from '../../../components';

import { useAuth } from '../../../hooks/useAuth';

const Login = () => {
  const navigation = useNavigation();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <Layout>
      <Container>
        <Both>
          <Text>Login</Text>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={(t) => setEmail(t)}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={(t) => setPassword(t)}
          />
          <Button text="Login" onPress={handleLogin} />
          <ButtonLink
            text="Crie já sua conta!"
            onPress={() => navigation.navigate('CreateAccount')}
          />
        </Both>
      </Container>
    </Layout>
  );
};

export default Login;
