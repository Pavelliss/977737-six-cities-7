import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function LocationItem(props) {
  const {city, onLocationChange, activeCity} = props;

  return (
    <li className="locations__item">
      <a
        className={
          `locations__item-link tabs__item
          ${city === activeCity ? 'tabs__item--active' : ''}`
        }
        href="{#}"
        onClick={(evt) => {
          evt.preventDefault();
          onLocationChange(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

const mapStateToProps = (state) => ({
  activeCity: state.city,
});

LocationItem.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired,
};

export {LocationItem};
export default connect(mapStateToProps, null)(LocationItem);
