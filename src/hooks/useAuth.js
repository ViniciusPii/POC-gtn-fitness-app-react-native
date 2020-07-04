import { useContext } from 'react';
import { AuhtContext } from '../contexts/auth.context';

export const useAuth = () => {
  const context = useContext(AuhtContext);
  const { signed } = context;
  return { signed };
};
