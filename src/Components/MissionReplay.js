import React, { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup, Polyline } from 'react-leaflet'
import { Icon } from 'leaflet';

const dronePath = [
    [12.9716, 77.5946],
    [12.9698, 77.7500],
    [12.9591, 77.6974],
    [12.9300, 77.6800],
    [12.9716, 77.5946]
]

const MissionReplay = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isReplayMission, setIsReplayMission] = useState(false);
    const [hasReplayStarted, setHasReplayStarted] = useState(false);
    
    
    const CustIcon = new Icon({
        iconUrl: require("../images/drone.png"),
        iconSize:[38, 38]
    })


    useEffect(() => {
        if(!isReplayMission) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if(prevIndex < dronePath.length - 1) {
                    return prevIndex + 1
                }
                clearInterval(timer);
                setHasReplayStarted(false);
                setIsReplayMission(false);
                return prevIndex;
            });
        }, 2000);

        return () => clearInterval(timer);
    }, [isReplayMission])
    
  return (
    <>
        <button 
            disabled={hasReplayStarted}
            onClick={() => {
                setCurrentIndex(0);
                setHasReplayStarted(true);
                setIsReplayMission(true);
            }}
            style={{
                padding: "10px 20px",
                margin: "10px",
                cursor: "pointer"
            }}
        >
            Replay Mission
        </button>

        <button
            disabled={!hasReplayStarted}
            onClick={() => setIsReplayMission(!isReplayMission)}
            style={{
                padding: "10px 20px",
                margin: "10px",
                cursor: "pointer"
            }}
        >
            {isReplayMission ? "Pause Mission" : "Resume Mission"}
        </button>

        <MapContainer center={dronePath[0]} zoom={12} style={{ height: "100vh", width: "100%"}}>
            <TileLayer 
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline 
                positions={dronePath.slice(0, currentIndex + 1)}
                color='blue'
                weight={4}
                dashArray="10,10"
            />

            <Marker
                position={dronePath[currentIndex]}
                icon={CustIcon}
            >
                <Popup>
                    <h3>DRone-001</h3>
                    <p>Moving...</p>
                </Popup>
            </Marker>
        </MapContainer>
    </>
  )
}

export default MissionReplay
