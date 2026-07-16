import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const AutoFollow = ({position}) => {
  const map = useMap()

  useEffect(() => {
    map.flyTo(position, map.getZoom(), {
        duration:1
    })
  }, [position, map]);

  return null;
}

export default AutoFollow
