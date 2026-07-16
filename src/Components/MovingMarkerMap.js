import React, { useEffect, useState } from 'react';
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
    
const MovingMarkerMap = () => {
    
    // const dronePath = [
    //     [12.9716, 77.5946],
    //     [12.9698, 77.7500],
    //     [12.9591, 77.6974],
    //     [12.9300, 77.6800]
    // ]

    // const [position, setPosition] = useState(dronePath[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMissionStarted, setIsMissionStarted] = useState(false);


    const CustIcon = new Icon({
        iconUrl: require("../images/drone.png"),
        iconSize:[38, 38]
    })

    useEffect(() => {

        if (!isMissionStarted) return;

        const timer = setInterval(() => {

            setCurrentIndex((prevIndex) => {

                if (prevIndex < dronePath.length -1) {
                    return prevIndex +1;
                }

                // without Button
                // if (prevIndex < dronePath.length-1) {
                //     const nextIndex = prevIndex +1;
                //     setPosition(dronePath[nextIndex]);
                //     return nextIndex;
                // }
                clearInterval(timer);
                return prevIndex;
            });
        }, 2000);

        return () => clearInterval(timer);

    }, [isMissionStarted]);
 
  return (
    <>
        <button
            onClick={() => setIsMissionStarted(true)}
            style={{
                padding: "10px 20px",
                margin: "10px",
                cursor: "pointer"
            }}
        >
            Start Mission 
        </button>

        <button
            onClick={() => {
                if(isMissionStarted) {
                    setIsMissionStarted(false);
                }else{
                    setIsMissionStarted(true);
                }
            }}
            style={{
                padding: "10px 20px",
                margin: "10px",
                cursor: "pointer"
            }}
        >
            {/* Stop Mission  */}
            {isMissionStarted ? "Stop Mission" : "Resume Mission"}
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
                    {/* <p>Current Index : {currentIndex}</p> */}
                </Popup>
            </Marker>
        </MapContainer>
    </>
  )
}

export default MovingMarkerMap
