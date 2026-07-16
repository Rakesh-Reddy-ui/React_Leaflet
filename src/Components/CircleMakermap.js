import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup, CircleMarker } from 'react-leaflet'
import { Icon } from 'leaflet';

const CircleMakermap = () => {

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
        ]
        
        const customIcon= new Icon({
            iconUrl: require("../images/icons8-location-48.png"),
            iconSize:[38, 38]
        })

  return (
    <MapContainer center={[12.9716, 77.5946]} zoom={13} style={{ height: "100vh", width:"100%" }}>
        <TileLayer 
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
    
        <CircleMarker 
            center={[12.9716, 77.5946]}
            radius={12}
            color='red'
            fillColor='yellow'
            fillOpacity={0.6}
            weight={3}
        >
            <Popup>
                Bengaluru            
            </Popup>
        </CircleMarker>
    </MapContainer>
  )
}

export default CircleMakermap
