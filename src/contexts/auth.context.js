import React, { createContext, useState, useEffect } from 'react';

import firebase from '../services/firebase';

export const AuhtContext = createContext();

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

export default AuthProvider;
