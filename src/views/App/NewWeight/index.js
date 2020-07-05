import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import firebase from '../../../services/firebase';

import { months } from '../../../mocks/months';

const NewWeight = () => {
  const [weight, setWeight] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');

  const handleSubmit = () => {
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
        fatWeight: (weight * fatPercentage) / 100,
      });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, alignItems: 'center' }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
    >
      <View
        style={{
          flex: 1,
          width: '85%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={{ marginBottom: 60, fontSize: 20 }}>
            Cadastre Seus Dados
          </Text>
          <TextInput
            style={{ width: '100%', fontSize: 20, marginBottom: 20 }}
            placeholder="Peso"
            keyboardType="numeric"
            value={weight}
            onChangeText={(t) => setWeight(t)}
          />
          <TextInput
            style={{ width: '100%', fontSize: 20 }}
            placeholder="Percentual de Gordura"
            keyboardType="numeric"
            value={fatPercentage}
            onChangeText={(t) => setFatPercentage(t)}
          />
          <TouchableOpacity
            style={{
              width: '100%',
              height: 55,
              backgroundColor: '#222',
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}
            onPress={handleSubmit}
          >
            <Text style={{ fontSize: 20, color: '#fff' }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewWeight;
