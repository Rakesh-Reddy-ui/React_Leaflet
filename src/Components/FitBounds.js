import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const FitBounds = ({ positions }) => {
  const map = useMap()

  useEffect(() => {
    map.fitBounds(positions, {
        padding: [50, 50],
        maxZoom: 14
    });
  }, [map, positions]);

  return null;
}

export default FitBounds
