import React, { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserRequest } from "../requests/UserRequest";

type GlobalContextProps = {
  userLogin: (email: string, password: string) => void;
  userSignup: (name: string, email: string, password: string, confirmPassword: string) => void;
  data: any | null;
  error: any | null;
  login: boolean | null;
  loading: boolean | null;
  userId: any;
  setUserId:any;
  getProfile:any;
  userLogout:any;
};

type GlobalStorageProps = {
  children: ReactNode
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)

const userRequest = new UserRequest()

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  const context = React.useContext(GlobalContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider")
  return context;
};

const UserContext: React.FC<GlobalStorageProps> = ({ children }) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [userId, setUserId] = useState<any | null>(null)

  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");

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

      window.localStorage.setItem('token', req.data.token)
      window.localStorage.setItem('id', req.data.user.id)

      setUserId(req.data.user.id)
      
      setLogin(true);
      navigate('/menu-medico');
    } catch (err:any) {
        setData(null);
        setError(err.response.data.error);
        setLoading(false);
        
    }finally {
        setLoading(false);
      }
  };

  const userSignup = async (name: string, email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);

      const body = {
        name,
        email,
        password
       
      }

      const {url} = userRequest.USER_SIGNUP(body)
      const req = await axios.post(url, body);

      window.localStorage.setItem('token', req.data.token);
      window.localStorage.setItem('id', req.data.user.id)
      
      
      setLogin(true);
      navigate('/menu-medico');
    } catch (err:any) {
      setData(null);
      setError(err.response.data.error);
      setLoading(false);
      
    }
  }

  const getProfile = async (userId:any) => {
    try {
      setError(null);
      setLoading(true);

      const {url, headers} = userRequest.GET_DOCTOR_BY_ID(userId, token)

      const req = await axios.get(url, {headers})

      setData(req.data) 
         
    } catch (err:any) {
      setData(null);
      setError(err.response.data.error);
      setLoading(false);
      
    }
  }

  const userLogout = () => {
    setData(null)
    setError(null)
    setLoading(false)

    window.localStorage.removeItem('token')
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('password')

    setLogin(false)
    navigate('/')

  }

 
  // useEffect(() => {
  //   const id = window.localStorage.getItem("id")

  //   if (token) {
  //     setLogin(true)
  //     getProfile(id)

  //   }else {
  //     userLogout()
  //   }

  // }, []);

  return (
     <GlobalContext.Provider
      value={{
        userLogin,
        userSignup,
        data,
        error,
        login,
        loading,
        userId,
        setUserId,
        getProfile,
        userLogout
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default UserContext;
