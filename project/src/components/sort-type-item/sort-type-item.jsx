import React from 'react';
import PropTypes from 'prop-types';

function SortTypeItem (props) {
  const {
    onClick,
    className,
    type,
  } = props;

  return (
    <li
      className={className}
      tabIndex="0"
      onClick={() => onClick(type)}
    >{type}
    </li>
  );
}

SortTypeItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SortTypeItem;
