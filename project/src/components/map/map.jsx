import React, {useRef, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import offersProp from '../offer-prop/offer.prop';
import useMap from '../../hooks/useMap';

const icon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const getPointCords = (cords) => (
  cords.map((cord) => {
    const latitude = cord['location']['latitude'];
    const longitude = cord['location']['longitude'];
    return [latitude, longitude];
  })
);

function Map (props) {
  const {offers, className} = props;

  const memoPointCords = useMemo(() => getPointCords(offers), [offers]);

  const city = offers[0]['city'];

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markers = [];

      memoPointCords.forEach((point) => {
        const marker = leaflet.marker(point, {icon});
        markers.push(marker);
        marker.addTo(map);
      });

      return () => markers.forEach((marker) => map.removeLayer(marker));
    }
  }, [map, memoPointCords]);

  return (
    <section className={className}>
      <div
        id='map'
        ref={mapRef}
        style={{height: '100%'}}
      />
    </section>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
  className: PropTypes.string,
};

export default Map;
