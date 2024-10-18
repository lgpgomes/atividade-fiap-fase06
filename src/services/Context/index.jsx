/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// Criando o contexto
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({
    nome: '',
    tipoUsuario: '',
    email: '',
    telefone: '',
    senha: '',
  });

  return (
    <UserContext.Provider value={{ usuario, setUsuario, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
