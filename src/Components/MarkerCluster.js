import React from 'react'
import { MapContainer, TileLayer, Popup, Marker, Polyline } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";

const MarkerCluster = () => {
    const drones = [
        {id: 1, position: [12.9716, 77.5946], name: "Drone-001"},
        {id: 2, position: [12.9728, 77.5960], name: "Drone-002"},
        {id: 3, position: [12.9702, 77.5935], name: "Drone-003"},
        {id: 4, position: [12.9735, 77.5952], name: "Drone-004"},
        {id: 5, position: [12.9695, 77.5925], name: "Drone-005"}
    ]

    const customIcon= new Icon({
        iconUrl: require("../images/drone.png"),
        iconSize:[38, 38]
    })
  return (
    <>
        <MapContainer center={[12.9716, 77.5946]} zoom={13} style={{ height: "100vh", width: "100%"}}>
            <TileLayer 
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline 
                positions={drones.map((drone) => drone.position)}
                color='blue'
                weight={4}
                dashArray="10,10"
            />

            <MarkerClusterGroup>
                {drones.map((drone) => (
                    <Marker
                        key={drone.id}
                        position={drone.position}
                        icon={customIcon}
                    >
                        <Popup>
                            <h3>{drone.name}</h3>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    </>
  )
}

export default MarkerCluster
