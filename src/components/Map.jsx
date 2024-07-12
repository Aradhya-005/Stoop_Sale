import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position = [40.677742, -73.999497]; // 2nd Pl. and Court St.

// Create a custom icon
const locationIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Map = () => {
  return (
    <div>
       <h3>Location:</h3>
       <MapContainer center={position} zoom={15} style={{ height: '200px', width: '300px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={locationIcon}>
       
        <Popup>2nd Pl. and Court St.</Popup>
      </Marker>
    </MapContainer>
    </div>
    
  );
};

export default Map;
