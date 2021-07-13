import React, {useRef, useEffect, useMemo} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {getActiveCardId} from '../../store/offers-data/selector';
import offersProp from '../offer-prop/offer.prop';
import useMap from '../../hooks/useMap';

const iconMap = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const iconActiveMap = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [39, 39],
  iconAnchor: [15, 30],
});

const getPointCords = (cord) => {
  const latitude = cord['location']['latitude'];
  const longitude = cord['location']['longitude'];
  return [latitude, longitude];
};

function Map (props) {
  const {offers, className} = props;
  const activeCardId = useSelector(getActiveCardId);

  const memoPointCords = useMemo(() => (offers), [offers]);

  const city = offers[0]['city'];

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const latitude = city['location']['latitude'];
    const longitude = city['location']['longitude'];

    if (map) {
      map.flyTo([latitude, longitude]);
      const markers = [];

      memoPointCords.forEach((point) => {
        const cords = getPointCords(point);
        const icon = point.id === activeCardId
          ? iconActiveMap
          : iconMap;

        const marker = leaflet.marker(cords, {icon});
        markers.push(marker);
        marker.addTo(map);
      });

      return () => markers.forEach((marker) => map.removeLayer(marker));
    }
  }, [map, memoPointCords, city, activeCardId]);

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
