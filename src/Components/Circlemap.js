import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup, Circle } from 'react-leaflet'
import { Icon } from 'leaflet';


const Circlemap = () => {

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
    <MapContainer center={[12.9716, 77.5946]} zoom={12} style={{ height: "100vh", width:"100%" }}>
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

        <Circle 
            center={[12.9591, 77.6974]}
            radius={1000}
            color='green'
            fillColor='lightgreen'
            fillOpacity={0.1}
        >
            <Popup>
                Drone Communication Range
            </Popup>
        </Circle>
    </MapContainer>
  )
}

export default Circlemap
