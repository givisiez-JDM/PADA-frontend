
import React, { Dispatch, ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserRequest } from "../requests/UserRequest";
import { PatientType } from "../types/PatientTypes";
import { PhaseType, TreatmentType, VaccineType } from "../types/TreatmentTypes";

type GlobalContextProps = {
  getToken: () => string;
  userLogin: (email: string, password: string) => void;
  userSignup: (name: string, email: string, password: string, confirmPassword: string) => void;
  data: any | null;
  error: any | null;
  login: boolean | null;
  loading: boolean | null;
  userId: any;
  setUserId: any;
  getProfile: any;
  userLogout: any;
  patientList: PatientType[];
  getPatientList: () => void;
  patientId: string;
  setPatientId: Dispatch<React.SetStateAction<string>>;
  patient: PatientType | null;
  getPatient: () => void;
  treatmentId: string;
  setTreatmentId: Dispatch<React.SetStateAction<string>>;
  treatment: TreatmentType | null;
  getTreatment: () => void;
  phaseList: PhaseType[];
  getPhaseList: () => void;
  phaseId: string;
  setPhaseId: Dispatch<React.SetStateAction<string>>;
  getVaccineList: () => void;
  vaccineList: VaccineType[];
};

type GlobalStorageProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

const userRequest = new UserRequest();

export const useData = () => {
  const context = React.useContext(GlobalContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

const UserContext: React.FC<GlobalStorageProps> = ({ children }) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [userId, setUserId] = useState<any | null>(null);
  const [tokenState, setTokenState] = useState("");
  const [patientList, setPatientList] = useState<PatientType[]>([]);
  const [patientId, setPatientId] = useState<string>("");
  const [patient, setPatient] = useState<PatientType | null>(null);
  const [treatmentId, setTreatmentId] = useState<string>("");
  const [treatment, setTreatment] = useState<TreatmentType | null>(null);
  const [phaseList, setPhaseList] = useState<PhaseType[]>([]);
  const [phaseId, setPhaseId] = useState<string>("");
  const [vaccineList, setVaccineList] = useState<VaccineType[]>([]);

  const navigate = useNavigate();

  const getToken = () => {
    if (tokenState) return tokenState;
    else {
      const storedToken = window.localStorage.getItem("token");
      if (storedToken) {
        setTokenState(storedToken);
        return storedToken;
      }
    }
    return "";
  };

  const setToken = (newToken: string) => {
    setTokenState(newToken);
    window.localStorage.setItem("token", newToken);
  };

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

      setToken(req.data.token);
      window.localStorage.setItem("id", req.data.user.id);

      setUserId(req.data.user.id);

      setLogin(true);
      navigate("/menu-medico");

    } catch (err: any) {
      setData(null);
      setError(err.response.data.error);
      setLoading(false);

    } finally {
      setLoading(false);
    }
  };

  const userSignup = async (name: string, email: string, password: string) => {
    try {
      setData(null);
      setError(null);
      setLoading(true);

      const body = {
        name,
        email,
        password
      };

      const { url } = userRequest.USER_SIGNUP(body);
      const signup = await axios.post(url, body);

      setData(signup.status);

    } catch (err: any) {
      setData(null);
      setError(err.response.data.error);
      setLoading(false);
    }
  };

  const getProfile = async (userId: string) => {
    try {
      setError(null);
      setLoading(true);

      const token = getToken();
      const { url, headers } = userRequest.GET_DOCTOR_BY_ID(userId, token);

      const req = await axios.get(url, { headers });

      setData(req.data);

    } catch (err: any) {
      setData(null);
      setError(err.response.data.error);
      setLoading(false);
    }
  };

  const getPatientList = async () => {
    try {
      setError(null);
      setLoading(true);

      const token = getToken();
      const { url, headers } = userRequest.GET_PATIENTS(token);

      const req = await axios.get(url, { headers });

      setPatientList(req.data);

    } catch (err: any) {
      setPatientList([]);
      setError(err.response.data.error);
      setLoading(false);
    }
  };

  const getPatient = async () => {
    try {
      setError(null);
      setLoading(true);

      const token = getToken();
      const { url, headers } = userRequest.GET_PATIENTS_BY_ID(patientId, token);

      const req = await axios.get(url, { headers });

      setPatient(req.data);

    } catch (err: any) {
      setPatient(null);
      setError(err.response.data.error);
      setLoading(false);
    }
  };

  const getTreatment = async () => {
    try {
      setError(null);
      setLoading(true);

      const token = getToken();
      const { url, headers } = userRequest.GET_TREATMENTS_BY_ID(patientId, token);

      const req = await axios.get(url, { headers });

      setTreatment(req.data);
      setTreatmentId(req.data.id);

    } catch (err: any) {
      setTreatment(null);
      setTreatmentId("");
      setError(err.response.data.error);
      setLoading(false);
    }
  };

  const getPhaseList = async () => {
    try {
      setError(null);
      setLoading(true);

      const token = getToken();
      const { url, headers } = userRequest.GET_PHASES_BY_TREATMENTS_ID(treatmentId, token);

      const req = await axios.get(url, { headers });

      setPhaseList(req.data);

    } catch (err: any) {
      setPhaseList([]);
      setError(err.response.data.error);
      setLoading(false);
    }
  };

  const getVaccineList = async () => {
    try {
      setError(null);
      setLoading(true);

      const token = getToken();
      const { url, headers } = userRequest.GET_VACCINES_BY_PHASES_ID(phaseId, token);

      const req = await axios.get(url, { headers });

      setVaccineList(req.data);

    } catch (err: any) {
      setVaccineList([]);
      setError(err.response.data.error);
      setLoading(false);
    }
  };

  const userLogout = () => {
    setData(null);
    setPatientList([]);
    setError(null);
    setLoading(false);
    setTreatment(null);
    setTreatmentId("");
    setPhaseList([]);

    setToken("");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("password");

    setLogin(false);
    navigate("/");
  };

  return (
    <GlobalContext.Provider
      value={{
        getToken,
        userLogin,
        userSignup,
        data,
        error,
        login,
        loading,
        userId,
        setUserId,
        getProfile,
        userLogout,
        patientList,
        getPatientList,
        patient,
        getPatient,
        patientId,
        setPatientId,
        treatmentId,
        setTreatmentId,
        treatment,
        getTreatment,
        phaseList,
        getPhaseList,
        phaseId,
        setPhaseId,
        getVaccineList,
        vaccineList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default UserContext;
