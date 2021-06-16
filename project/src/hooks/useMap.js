import { useEffect, useState } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {ZOOM} from '../const';


function useMap (mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: city,
        zoom: ZOOM,
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);

      setMap(instance);
    }
  }, [map, mapRef, city]);

  return map;
}

export default useMap;
