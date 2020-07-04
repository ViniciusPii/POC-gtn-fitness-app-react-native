import React, { createContext, useState, useEffect, useContext } from 'react';

import firebase from '../services/firebase';

const AuhtContext = createContext();

const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSigned(!!user);
    });
  }, []);

  const createAccount = (name, email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Cadastrado com Sucesso');
      })
      .catch((erro) => {
        if (name === '' || email === '' || password === '') {
          alert('Preencha todos os campos!');
          return;
        }

        switch (erro.message) {
          case 'Password should be at least 6 characters':
            alert('Sua senha deve ter no minimo 6 caracteres!');
            break;
          case 'The email address is already in use by another account.':
            alert('Esse email já está sendo utilizado por outro usuário!');
            break;
          case 'The email address is badly formatted.':
            alert('O formato do email não é válido!');
            break;
          default:
            alert('Não foi possível cadastrar o Usuário');
            break;
        }
      });
  };

  return (
    <AuhtContext.Provider value={{ signed, createAccount }}>
      {children}
    </AuhtContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuhtContext);
  const { signed, createAccount } = context;
  return { signed, createAccount };
};

export default AuthProvider;
