import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const ChangeView = () => {
    const map = useMap();

    useEffect(() => {
        const timer1 = setTimeout(() => {
            map.flyTo([12.9716, 77.5946], 17);
        }, 3000);

        
        const timer2 = setTimeout(() => {
            map.flyTo([12.9698, 77.7500], 17);
        }, 5000);

        const timer3 = setTimeout(() => {
            map.flyTo([12.9591, 77.6974], 17);
        }, 8000);

        // map.setView([12.9716, 77.5946], 15);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        }
    }, [map])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         map.setView([12.9698, 77.7500], 17);
    //     }, 5000);

    //     // map.setView([12.9716, 77.5946], 15);
    //     return () => clearTimeout(timer);
    // }, [map])


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         map.setView([12.9591, 77.6974], 17);
    //     }, 8000);

    //     // map.setView([12.9716, 77.5946], 15);
    //     return () => clearTimeout(timer);
    // }, [map])


    return null;
}

export default ChangeView
