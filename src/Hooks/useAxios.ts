/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseAxiosResponse<T> {
  data: T | null;
  error: any | null;
  loading: boolean;
  get: (url: string, config?: AxiosRequestConfig) => Promise<void>;
  post: (url: string, body: any, config?: AxiosRequestConfig) => Promise<void>;
  postWithRes: (url: string, body: any, config?: AxiosRequestConfig) => Promise<void>;
  deleteAxios: (url: string, config?: AxiosRequestConfig) => Promise<void>;
  put: (url: string, data: any, config?: AxiosRequestConfig) => Promise<void>;
  putWithoutRes: (url: string, data: any, config?: AxiosRequestConfig) => Promise<void>;
}

const useAxios = <T = any>(): UseAxiosResponse<T> => {

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const get = useCallback(async (url: string, config?: AxiosRequestConfig) => {
    try {
      setError(null);
      setLoading(true);

      const res = await axios.get<T>(url, config);

      setData(res.data);
    } catch (error:any) {
      setData(null);
      setError(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const post = useCallback(async (url: string, body: any, config?: AxiosRequestConfig) => {
    try {
      setError(null);
      setLoading(true);

      await axios.post(url, body, config);
    } catch (error:any) {
      setData(null);
      setError(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const postWithRes = useCallback(async (url: string, body: any, config?: AxiosRequestConfig) => {
    try {
      setError(null);
      setLoading(true);

      const res = await axios.post<T>(url, body, config);

      setData(res.data);
    } catch (error:any) {
      setData(null);
      setError(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteAxios = useCallback(async (url: string, config?: AxiosRequestConfig) => {
    try {
      setError(null);
      setLoading(true);

      await axios.delete(url, config);
    } catch (error:any) {
      setData(null);
      setError(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const put = useCallback(async (url: string, data: any, config?: AxiosRequestConfig) => {
    try {
      setError(null);
      setLoading(true);

      const res = await axios.put<T>(url, data, config);

      setData(res.data);
    } catch (error:any) {
      setData(null);
      setError(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const putWithoutRes = useCallback(async (url: string, data: any, config?: AxiosRequestConfig) => {
    try {
      setError(null);
      setLoading(true);

      await axios.put(url, data, config);
    } catch (error:any) {
      setData(null);
      setError(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    error,
    loading,
    get,
    post,
    put,
    deleteAxios,
    putWithoutRes,
    postWithRes,
  };
};

export default useAxios;
