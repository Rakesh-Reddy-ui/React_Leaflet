import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
// import ChangeView from './ChangeView';
import MapEvents from './MapEvents';

const Tooltipmap = () => {

     const markers = [
                {
                    id: 1,
                    name: "Bengaluru",
                    position:[12.9716, 77.5946] ,  
                    status: "Active",
                    battery: "85%",
                    speed: "18 m/s"
                },
                
                {
                    id: 2,
                    name: "Whitefield",
                    position:[12.9698, 77.7500] ,
                    status: "Inactive",
                    battery: "65%",
                    speed: "15 m/s"
                },
                
                {
                    id: 3,
                    name: "Marathahalli",
                    position:[12.9591, 77.6974],
                    status: "Inactive",
                    battery: "92%",
                    speed: "20 m/s"   
                },
            ]
                
            const customIcon= new Icon({
                iconUrl: require("../images/icons8-location-48.png"),
                iconSize:[38, 38]
            })
        
            // const TrianglePoints = [
            //     [12.9716, 77.5946], 
            //     [12.9650, 77.5850],
            //     [12.9650, 77.6040]
            // ]
        

  return (
    <MapContainer center={[12.9716, 77.5946]} zoom={12} style={{ height: "100vh", width:"100%" }}>
        <TileLayer 
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* <ChangeView/> */}
        <MapEvents />

        {markers.map(marker => (
            <Marker key={marker.id} position={marker.position} icon={customIcon}>
                <Tooltip 
                    // sticky
                    // permanent
                    direction='top'
                    // offset={[0, -20]}
                    opacity={0.9}
                >
                   <div>
                        <strong>{marker.name}</strong>
                        <br />
                        status:{marker.status}
                        <br />
                        Battery: {marker.battery}
                        <br />
                        Speed: {marker.speed}
                    </div>
                </Tooltip>
                {/* <Popup>
                    <div>
                        <h2>{marker.name}</h2>
                        <h3>{marker.status}</h3>
                    </div>
                </Popup> */}
            </Marker>
        ))}
        
    </MapContainer>
  )
}

export default Tooltipmap
