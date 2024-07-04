/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface UseAxiosResponse<T> {
  data: T | null
  status: number
  error: any | null
  loading: boolean
  get: (url: string, config?: AxiosRequestConfig) => Promise<void>
  post: (url: string, body: any, config?: AxiosRequestConfig) => Promise<void>
  postWithRes: (
    url: string,
    body: any,
    config?: AxiosRequestConfig
  ) => Promise<void>
  deleteAxios: (url: string, config?: AxiosRequestConfig) => Promise<void>
  patch: (url: string, data: any, config?: AxiosRequestConfig) => Promise<void>
  put: (url: string, data: any, config?: AxiosRequestConfig) => Promise<void>
  putWithoutRes: (
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ) => Promise<void>
}

const useAxios = <T = any>(): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<number>(0);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const get = useCallback(async (url: string, config?: AxiosRequestConfig) => {
    try {
      setError(null);
      setLoading(true);
      setStatus(0);

      const res = await axios.get<T>(url, config);

      setStatus(res.status);
      setData(res.data);
    }
    catch (error: any) {
      setStatus(error.response.status);
      setData(null);
      setError(error.response?.data || error.message);
    }
    finally {
      setLoading(false);
    }
  }, []);

  const post = useCallback(
    async (url: string, body: any, config?: AxiosRequestConfig) => {
      try {
        setError(null);
        setLoading(true);
        setStatus(0);

        const res = await axios.post(url, body, config);

        setStatus(res.status);
      }
      catch (error: any) {
        setStatus(error.response.status);
        setData(null);
        setError(error.response?.data || error.message);
      }
      finally {
        setLoading(false);
      }
    },
    [],
  );

  const postWithRes = useCallback(
    async (url: string, body: any, config?: AxiosRequestConfig) => {
      try {
        setError(null);
        setLoading(true);
        setStatus(0);

        const res = await axios.post<T>(url, body, config);

        setStatus(res.status);
        setData(res.data);
      }
      catch (error: any) {
        setStatus(error.response.status);
        setData(null);
        setError(error.response?.data || error.message);
      }
      finally {
        setLoading(false);
      }
    },
    [],
  );

  const deleteAxios = useCallback(
    async (url: string, config?: AxiosRequestConfig) => {
      try {
        setError(null);
        setLoading(true);
        setStatus(0);

        const res = await axios.delete(url, config);

        setStatus(res.status);
      }
      catch (error: any) {
        setStatus(error.response.status);
        setData(null);
        setError(error.response?.data || error.message);
      }
      finally {
        setLoading(false);
      }
    },
    [],
  );

  const patch = useCallback(
    async (url: string, data: any, config?: AxiosRequestConfig) => {
      try {
        setError(null);
        setLoading(true);

        const res = await axios.patch<T>(url, data, config);

        setData(res.data);
      }
      catch (error: any) {
        setData(null);
        setError(error.response?.data || error.message);
      }
      finally {
        setLoading(false);
      }
    },
    [],
  );

  const put = useCallback(
    async (url: string, data: any, config?: AxiosRequestConfig) => {
      try {
        setError(null);
        setLoading(true);
        setStatus(0);

        const res = await axios.put<T>(url, data, config);

        setStatus(res.status);
        setData(res.data);
      }
      catch (error: any) {
        setStatus(error.response.status);
        setData(null);
        setError(error.response?.data || error.message);
      }
      finally {
        setLoading(false);
      }
    },
    [],
  );

  const putWithoutRes = useCallback(
    async (url: string, data: any, config?: AxiosRequestConfig) => {
      try {
        setError(null);
        setLoading(true);
        setStatus(0);

        const res = await axios.put(url, data, config);

        setStatus(res.status);
      }
      catch (error: any) {
        setStatus(error.response.status);
        setData(null);
        setError(error.response?.data || error.message);
      }
      finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    data,
    status,
    error,
    loading,
    get,
    patch,
    post,
    put,
    deleteAxios,
    putWithoutRes,
    postWithRes,
  };
};

export default useAxios;
