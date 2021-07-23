import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {SortType} from '../../const';
import {changeSortType} from '../../store/action';
import {getSortType} from '../../store/offers-data/selector';
import SortTypeItem from '../sort-type-item/sort-type-item';

const getClassName = (isVisible) => {
  const className = isVisible
    ? 'places__options places__options--custom places__options--opened'
    : 'places__options places__options--custom';

  return className;
};

function SortForm() {
  const [visible, setVisible] = useState(false);

  const getActiveSortType = useSelector(getSortType);
  const dispatch = useDispatch();

  const onSortItemClick = (activeSortType) => {
    setVisible(false);
    dispatch(changeSortType(activeSortType));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setVisible((preState) => !preState)}
      >
        {getActiveSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={getClassName(visible)}>
        {
          Object.values(SortType).map((type) => (
            <SortTypeItem
              className={
                `${getActiveSortType === type
                  ? 'places__option places__option--active'
                  : 'places__option'
                }`
              }
              key={type}
              type={type}
              onClick={onSortItemClick}
            />
          ))
        }
      </ul>
    </form>
  );
}

export default SortForm;
