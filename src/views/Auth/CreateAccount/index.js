import React, { useState } from 'react';

import { useAuth } from '../../../hooks/useAuth';
import {
  Layout,
  Container,
  Both,
  Input,
  Button,
  Title,
} from '../../../components';

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
          <Title title="Criar Conta" />
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
