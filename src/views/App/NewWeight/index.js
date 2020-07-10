/* eslint-disable no-alert */
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../../services/firebase';

import {
  Layout,
  Container,
  Input,
  Button,
  Both,
  Title,
} from '../../../components';

import { months } from '../../../mocks/months';

const NewWeight = () => {
  const navigation = useNavigation();

  const [weight, setWeight] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');

  const handleSubmit = () => {
    if (weight === '' || fatPercentage === '') {
      alert('Preencha todos os Campos');
      return;
    }

    const { uid } = firebase.auth().currentUser;
    const today = new Date();

    firebase
      .database()
      .ref(today.getFullYear())
      .child(uid)
      .child(months[today.getMonth()])
      .push()
      .set({
        weight,
        fatPercentage,
        fatWeight: ((weight * fatPercentage) / 100).toFixed(1),
      });

    firebase
      .database()
      .ref('weights')
      .child(uid)
      .push()
      .set({
        weight,
        fatPercentage,
        fatWeight: ((weight * fatPercentage) / 100).toFixed(1),
      });

    navigation.navigate('Home');
  };

  return (
    <Layout>
      <Container>
        <Both>
          <Title title="Cadastrar novo Peso" />
          <Input
            placeholder="Peso"
            keyboardType="numeric"
            value={weight.replace(',', '.')}
            onChangeText={(t) => setWeight(t)}
          />
          <Input
            placeholder="Percentual de Gordura"
            keyboardType="numeric"
            value={fatPercentage.replace(',', '.')}
            onChangeText={(t) => setFatPercentage(t)}
          />
          <Button text="Cadastrar" onPress={handleSubmit} />
        </Both>
      </Container>
    </Layout>
  );
};

export default NewWeight;
