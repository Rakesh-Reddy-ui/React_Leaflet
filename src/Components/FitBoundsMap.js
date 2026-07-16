import { map } from 'leaflet';
import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const FitBoundsMap = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    map.fitbounds(positions);
  }, [positions, map]);

  return null;
}

export default FitBoundsMap
