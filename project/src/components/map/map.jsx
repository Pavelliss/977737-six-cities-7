import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import offersProp from '../offer-prop/offer.prop';
import useMap from '../../hooks/useMap';
import {CITY} from '../../const';

const icon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map (props) {
  const {offers} = props;
  const pointCords = offers.map((offer) => {
    const latitude = offer['location']['latitude'];
    const longitude = offer['location']['longitude'];
    return [latitude, longitude];
  });

  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  useEffect(() => {
    if (map) {
      pointCords.forEach((point) => {
        leaflet
          .marker(point, {icon})
          .addTo(map);
      });
    }
  }, [map, pointCords]);

  return (
    <section className="cities__map map">
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
};

export default Map;
