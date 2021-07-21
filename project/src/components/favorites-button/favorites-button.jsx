import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {getAuthorizationStatus} from '../../store/user/selector';
import {AppRoute, AuthorizationStatus} from '../../const';
import {checkStatus} from '../../helper/helper';
import {changeFavoriteStatus} from '../../store/api-actions';

function FavoritesButton(props) {
  const {
    isFavorite,
    className,
    id,
    size,
  } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuthorization = checkStatus(AuthorizationStatus.AUTH ,authorizationStatus);

  const onButtonClick = () => {
    if (!isAuthorization) {
      return history.push(AppRoute.LOGIN);
    }

    isFavorite
      ? dispatch(changeFavoriteStatus(0, id))
      : dispatch(changeFavoriteStatus(1, id));
  };

  return (
    <button
      type="button"
      className={
        isFavorite
          ? `${className}-button
             ${className}-button--active button`
          : `${className}-button button`
      }
      onClick={onButtonClick}
    >
      <svg className={`${className}-icon`} width={size['width']} height={size['height']}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

FavoritesButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

export default FavoritesButton;
