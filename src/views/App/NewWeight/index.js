/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

const NewWeight = ({ route }) => {
  const navigation = useNavigation();

  const today = new Date();

  const { month } = route.params;

  const [weight, setWeight] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');

  const handleSubmit = () => {
    const { uid } = firebase.auth().currentUser;

    if (
      weight === '' ||
      fatPercentage === '' ||
      Number.isNaN(Number(weight)) ||
      Number.isNaN(Number(fatPercentage))
    ) {
      alert('Preencha todos os Campos Corretamente');
      return;
    }

    if (month > today.getMonth()) {
      alert('Uau! Você está no futuro?!');
      navigation.navigate('Home');
      return;
    }

    firebase
      .database()
      .ref(today.getFullYear())
      .child(uid)
      .child(months[month])
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

NewWeight.propTypes = {
  route: PropTypes.node.isRequired,
};

export default NewWeight;
