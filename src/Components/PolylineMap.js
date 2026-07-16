import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';

const PolylineMap = () => {

  const markers = [
        {
            id: 1,
            name: "Bengaluru",
            position:[12.9716, 77.5946] ,  
            status: "Active"
        },
    
        {
            id: 2,
            name: "Whitefield",
            position:[12.9698, 77.7500] ,
            status: "Inactive"  
        },
    
        {
            id: 3,
            name: "Marathahalli",
            position:[12.9591, 77.6974],
            status: "Inactive"   
        },

        {
            id: 4,
            name: "Bengaluru",
            position:[12.9716, 77.5946] ,  
            status: "Active"
        },
    ]

    const path = [
        [12.9716, 77.5946],
        [12.9698, 77.7500],
        [12.9591, 77.6974],
        [12.9300, 77.6800],
        [12.9716, 77.5946]
    ]
    
    const customIcon= new Icon({
        iconUrl: require("../images/icons8-location-48.png"),
        iconSize:[38, 38]
    })

  return (
    <MapContainer center={[12.9716, 77.5946]} zoom={12} style={{ height: "100vh", width:"100%" }}>
        <TileLayer 
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Draw Route */}
        <Polyline
            positions={path}
            color="Blue"
            weight={2}
            dashArray="10,10"
            opacity={0.5}
        />
        
        {markers.map(marker => (
            <Marker key={marker.id} position={marker.position} icon={customIcon}>
                <Popup>
                    <div>
                        <h2>{marker.name}</h2>
                        <h3>{marker.status}</h3>
                    </div>
                </Popup>
            </Marker>
        ))}
    </MapContainer>
  )
}

export default PolylineMap;