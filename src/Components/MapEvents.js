import { useMapEvents } from 'react-leaflet';

const MapEvents = () => {
    console.log("MapEvents Rendered")
    useMapEvents({
        click(e) {
            // alert(
            //     `Latitude: ${e.latlng.lat}\nLongitude: ${e.latlng.lng}`
            // );
            // console.log("Map clicked")  // useMapEvent()
            // console.log(e.latlng)

            // useMapEvents()
            
            // console.log("Latitude:", e.latlng.lat);
            // console.log("Longitude:", e.latlng.lng);
            console.log("LatLng:", e.latlng);
            },
            zoomend() {
                console.log("Zoom completed");
            },
            move() {
                console.log("Map moved");
            }
    });
    return null;
}

export default MapEvents;
