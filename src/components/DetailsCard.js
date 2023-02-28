import React from "react";
import { Map } from "./Map";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export function DetailsCard({ country }) {
  return (
    <div className="details">
      <Card
        sx={{
          maxWidth: 800,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{
            height: 250,
            width: 360,
            border: "1px solid gray",
            marginTop: 1,
          }}
          image={country.flags.svg}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" align="center">
            {country.name.common} <br />
          </Typography>
          <Typography gutterBottom variant="h6" component="div" align="center">
            {!country.altSpellings[1] ? "-" : country.altSpellings[1]} <br />
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="infos"
            align="center"
          >
            <p>
              The country is located at {country.subregion} its capital is{" "}
              {country.capital} and area is {country.area} km².
            </p>{" "}
            {<br />}
            <li>
              Population: <b>{country.population.toLocaleString()}</b>
            </li>
            <br />
            <li>
              Contrinents: <b>{country.continents}</b>
            </li>
            <br />
            
            <p>Languages: {" "}
              {Object.values(country.languages)?.join(", ")}.</p> 
            
          </Typography>
          <Map country={country} />
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
