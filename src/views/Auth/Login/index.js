import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
    >
      <View
        style={{
          width: '85%',
          alignItems: 'center',
          height: 'auto',
        }}
      >
        <Text style={{ fontSize: 30, color: '#222' }}>Login</Text>
        <TextInput
          style={{
            marginTop: 20,
            width: '100%',
            fontSize: 20,
          }}
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={(t) => setEmail(t)}
        />
        <TextInput
          style={{
            marginTop: 20,
            width: '100%',
            fontSize: 20,
          }}
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={(t) => setPassword(t)}
        />
        <TouchableOpacity
          style={{
            height: 55,
            width: '100%',
            marginTop: 30,
            backgroundColor: '#222',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#fff' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 30 }}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={{ fontSize: 18, color: '#00f' }}>
            Crie já sua Conta!
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
