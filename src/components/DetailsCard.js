import React from 'react';
import { Link } from "react-router-dom";

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
        sx={{ height: 250, width: 360, border: "1px solid gray", marginTop: 1}}
        image={country.flags.svg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica {<br />}
          <b>{country.population.toLocaleString()}</b><br/>
          <i>{country.continents}</i><br />
          {country.languages && typeof country.languages === "object" && Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
          ))}      
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


       