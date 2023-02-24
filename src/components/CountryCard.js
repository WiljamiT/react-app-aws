import React from 'react'

import {
  TableCell,
  TableRow
} from "@mui/material";

export function CountryCard({ country }) {
  return (
    <TableRow>
        <TableCell><img src={country.flags.png} alt="asdasd" style={{width: "auto", height: "100px", border: "1px solid gray" }}/></TableCell>
        <TableCell>{country.name.common}</TableCell>
        <TableCell>{country.continents}</TableCell>
        <TableCell>{country.population.toLocaleString()}</TableCell>
        <TableCell>{country.languages && typeof country.languages === "object" && Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
          ))}
        </TableCell>
    </TableRow>
  )
}


       