/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { UserRequest } from '../Requests/UserRequest';
import { useNavigate } from 'react-router-dom';

// Defina uma interface para as propriedades do contexto global
type GlobalContextProps = {
  userLogin: (email: string, password: string) => void;
  data: any | null;
  error: any | null;
  login: boolean | null;
  loading: boolean | null
}

// Defina uma interface para as propriedades do componente GlobalStorage
type GlobalStorageProps  = {
  children: ReactNode;
}

// Crie o contexto global com o tipo especificado
export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

const userRequest = new UserRequest();


export const useData = () => {
const context = React.useContext( GlobalContext );
if ( !context ) throw new Error( 'useData precisa estar em DataContextProvider' );
return context;
}

const GlobalStorage: React.FC<GlobalStorageProps> = ({ children }) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Verifique se o usuário já está autenticado ao carregar a página
    const token = window.localStorage.getItem('token');
    if (token) {
      setLogin(true);
    }
  }, []);

  const userLogin = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);

      const body = {
        email: email,
        password: password,
      };

      const { url } = userRequest.USER_LOGIN();
      const req = await axios.post(url, body);

      window.localStorage.setItem('token', req.data);

      setLogin(true);
      navigate('/home');
    } catch (error:any) {
      setError(error.response?.data || 'Erro desconhecido');
      setLoading(false);
    }
  };


  return (
    <GlobalContext.Provider
      value={{
        userLogin,
        data,
        error,
        login,
        loading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};



export default GlobalStorage;
