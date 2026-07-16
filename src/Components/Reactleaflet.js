// Displaying Map

import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from 'react-leaflet'

const Reactleaflet = () => {
  return (
    <MapContainer center={[12.9716, 77.5946]} zoom={18} style={{ height: "100vh", width:"100%" }}>
        <TileLayer 
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
      
  )
}

export default Reactleaflet
