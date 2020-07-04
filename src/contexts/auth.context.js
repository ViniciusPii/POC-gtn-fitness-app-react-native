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

  return (
    <AuhtContext.Provider value={{ signed }}>{children}</AuhtContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuhtContext);
  const { signed } = context;
  return { signed };
};

export default AuthProvider;
