import React from 'react';

import { Link } from "react-router-dom";

import {
  TableCell,
  TableRow
} from "@mui/material";

export function CountryCard({ country }) {
  return (
    <TableRow>
        <TableCell><img src={country.flags.png} alt={country.name.common} style={{width: "200px", height: "120px", border: "1px solid gray", objectFit: "cover" }}/></TableCell>
        <TableCell>{country.name.common}</TableCell>
        <TableCell>{country.continents}</TableCell>
        <TableCell>{country.population.toLocaleString()}</TableCell>
        <TableCell>{country.languages && typeof country.languages === "object" && Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
          ))}
        </TableCell>
        <TableCell><Link to={`/country-details/${country.name.common}`}>More</Link></TableCell>
    </TableRow>
  )
}


       