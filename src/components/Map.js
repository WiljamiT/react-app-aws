import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

export const Map = ({ country }) => {
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