
import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { DetailsCard } from '../components/DetailsCard';
import { CircularProgress } from "@mui/material";

function CountryPage() {
  const { name } = useParams();

  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/name/${name}`
  );

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const country = data[0];

  return (
    <div>
      <DetailsCard country={country} />
    </div>
  );
}

export default CountryPage;