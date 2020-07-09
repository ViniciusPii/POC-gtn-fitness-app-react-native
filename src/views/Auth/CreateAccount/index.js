import React, { useState } from 'react';
import { Text } from 'react-native';

import { useAuth } from '../../../hooks/useAuth';
import { Layout, Container, Both, Input, Button } from '../../../components';

const CreateAccount = () => {
  const { createAccount } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    createAccount(name, email, password);
  };

  return (
    <Layout>
      <Container>
        <Both>
          <Text>Criar Conta</Text>
          <Input
            placeholder="Nome"
            value={name}
            onChangeText={(t) => setName(t)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
          />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={(t) => setPassword(t)}
          />
          <Button text="Cadastrar" onPress={handleCreateAccount} />
        </Both>
      </Container>
    </Layout>
  );
};

export default CreateAccount;
