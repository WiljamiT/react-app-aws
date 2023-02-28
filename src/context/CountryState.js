import React, { createContext, useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { CircularProgress } from "@mui/material";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const { data, loading, error } = useFetch("https://restcountries.com/v3.1/all");

  useEffect(() => {
    if (data && data.length) {
      setCountries(data);
    }
  }, [data]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    // 
    console.log(error.message)
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (!data) return null;

  return (
    <CountryContext.Provider value={{ countries, setCountries, loading, error }}>
      {children}
    </CountryContext.Provider>
  );
};