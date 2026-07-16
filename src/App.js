import './App.css';
// import Reactleaflet from './Components/Reactleaflet';
// import MarkerMap from './Components/MarkerMap';
// import PolylineMap from './Components/PolylineMap';
// import Circlemap from './Components/Circlemap';
// import Polygonmap from './Components/Polygonmap';
// import TriangleMap from './Components/TriangleMap';
// import Rectangelmap from './Components/Rectangelmap';
// import CircleMakermap from './Components/CircleMakermap';
// import Tooltipmap from './Components/Tooltipmap';

// import MovingMarkerMap from './Components/MovingMarkerMap';
// import MovingMarkerAutoFollow from './Components/MovingMarkerAutoFollow';
// import LivePolyline from './Components/LivePolyline';
// import Fitboundsmap from './Components/Fitboundsmap';
// import MarkerRotation from './Components/MarkerRotation';
// import MissionReplay from './Components/MissionReplay';
import MarkerCluster from './Components/MarkerCluster';

function App() {
  return (
    <div className="App">
      {/* <Reactleaflet/> */}
      {/* <MarkerMap/> */}
      {/* <PolylineMap/> */}
      {/* <Circlemap /> */}
      {/* <Polygonmap /> */}
      {/* <TriangleMap /> */}
      {/* <Rectangelmap /> */}
      {/* <CircleMakermap /> */}
      {/* <Tooltipmap /> */}
      {/* <MovingMarkerMap /> */}
      {/* <MovingMarkerAutoFollow /> */}
      {/* <LivePolyline /> */}
      {/* <Fitboundsmap /> */}
      {/* <MarkerRotation /> */}
      {/* <MissionReplay /> */}
      <MarkerCluster />
    </div>
  );
}

export default App;


// // import { divIcon, Icon, point } from 'leaflet';
// // import './App.css';
// // import "leaflet/dist/leaflet.css";
// // import MarkerClusterGroup from 'react-leaflet-cluster';

// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// // function App() {

// //   const markers = [
// //     {
// //       geocode:[48.86, 2.3522],
// //       popUp:"Hello, I am a pop up 1"
// //     },
// //     {
// //       geocode:[48.85, 2.3522],
// //       popUp:"Hello, I am a pop up 2"
// //     },
// //     {
// //       geocode:[48.855, 2.34],
// //       popUp:"Hello, I am a pop up 3"
// //     },
// //   ]

  

// //   const customIcon= new Icon({
// //     iconUrl: require("./images/icons8-location-48.png"),
// //     iconSize:[38, 38]
// //   })

// //   const createCustomClusterIcon = (cluster) => {
// //     return new divIcon({
// //       html:`<div class="cluster-icon">${cluster.getChildCount()}</div>`,
// //       className:"custom-marker-cluster",
// //       iconSize:point(33, 33, true)
// //     })
// //   }

// //   return (
// //     <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: "100vh", width: "100%" }}>
// //       <TileLayer 
// //         attribution='&copy; OpenStreetMap contributors'
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       />
// //       <MarkerClusterGroup
// //         chunkedLoading
// //         iconCreateFunction={createCustomClusterIcon}
      
// //       >
      
// //         {markers.map(marker => (
// //           <Marker position={marker.geocode} icon={customIcon}>
// //             <Popup>{marker.popUp}</Popup>
// //           </Marker>
// //         ))}
// //       </MarkerClusterGroup>
// //     </MapContainer>
// //   );
// // }

// // export default App;


// import "./App.css";
// import "leaflet/dist/leaflet.css";

// import { useState, useEffect } from "react";

// import { Icon } from "leaflet";

// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   Polyline
// } from "react-leaflet";

// import MarkerClusterGroup from "react-leaflet-cluster";

// function App() {

//   // Waypoints
//   const markers = [
//     {
//       geocode: [48.8600, 2.3522],
//       popUp: "Waypoint 1",
//     },
//     {
//       geocode: [48.8560, 2.3470],
//       popUp: "Waypoint 2",
//     },
//     {
//       geocode: [48.8530, 2.3410],
//       popUp: "Waypoint 3",
//     },
//   ];

//   // Drone Route
//   const dronePath = [
//     [48.8600, 2.3522],
//     [48.8590, 2.3510],
//     [48.8580, 2.3500],
//     [48.8570, 2.3490],
//     [48.8560, 2.3470],
//     [48.8550, 2.3450],
//     [48.8540, 2.3430],
//     [48.8530, 2.3410],
//   ];

//   // Drone Position
//   const [dronePosition, setDronePosition] = useState(dronePath[0]);

//   // Drone Animation
//   useEffect(() => {

//     let index = 0;

//     const interval = setInterval(() => {

//       index++;

//       if (index >= dronePath.length) {

//         clearInterval(interval);

//         return;
//       }

//       setDronePosition(dronePath[index]);

//     }, 1000);

//     return () => clearInterval(interval);

//   }, []);

//   // Waypoint Icon
//   const locationIcon = new Icon({
//     iconUrl: require("./images/icons8-location-48.png"),
//     iconSize: [35, 35],
//   });

//   // Drone Icon
//   const droneIcon = new Icon({
//     iconUrl: require("./images/drone.png"),
//     iconSize: [50, 50],
//   });

//   return (
//     <MapContainer
//       center={[48.8566, 2.3522]}
//       zoom={14}
//       style={{ height: "100vh", width: "100%" }}
//     >

//       <TileLayer
//         attribution="&copy; OpenStreetMap contributors"
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       {/* Flight Path */}

//       <Polyline
//         positions={dronePath}
//         color="blue"
//         weight={4}
//       />

//       {/* Waypoints */}

//       <MarkerClusterGroup>

//         {markers.map((marker, index) => (

//           <Marker
//             key={index}
//             position={marker.geocode}
//             icon={locationIcon}
//           >
//             <Popup>{marker.popUp}</Popup>

//           </Marker>

//         ))}

//       </MarkerClusterGroup>

//       {/* Moving Drone */}

//       <Marker
//         position={dronePosition}
//         icon={droneIcon}
//       >

//         <Popup>Drone</Popup>

//       </Marker>

//     </MapContainer>
//   );
// }

// export default App;
