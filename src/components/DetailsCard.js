import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

import {
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Button, 
  Typography
} from "@mui/material";

const LeafletMap = ({ country }) => {
    const position  = country.latlng;
    console.log(country)
    return (
    <div className="map">
        <MapContainer style={{ height: "100vh" }} center={position} zoom={2} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
     </div>   
    )
}

export function DetailsCard({ country }) {
    
  return (
    <div className="details">
    <Card sx={{ maxWidth: 800, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <CardMedia
        sx={{ height: 250, width: 360, border: "1px solid gray", marginTop: 1 }}
        image={country.flags.svg}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align="center">
          {country.name.common} <br />
        </Typography>
        <Typography gutterBottom variant="h6" component="div" align="center">
          {!country.altSpellings[1] ? "-" : country.altSpellings[1]} <br />
        </Typography>
        <Typography variant="body2" color="text.secondary" className="infos" align="center">
          <p>The country is located at {country.subregion} its capital is {country.capital} and area is {country.area} km².</p> {<br />}
          <li>Population: <b>{country.population.toLocaleString()}</b></li><br/>
          <li>Contrinents: <b>{country.continents}</b></li><br />
          <li>Languages: {country.languages && typeof country.languages === "object" && Object.keys(country.languages).map((key) => (
          <i key={key}>{country.languages[key]} </i>
          ))}</li>      
        </Typography>
        <LeafletMap country={country} />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
    </div>
  )
}


       