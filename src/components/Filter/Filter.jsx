import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ value, handlechange, contactsCount }) {
  return (
    <>
      {contactsCount > 0 ? (
        <label className={[css.filter__label]}>
          Find contacts by name:
          <input
            className={[css.filter__input]}
            type="text"
            name="filter"
            value={value}
            onChange={handlechange}
          />
        </label>
      ) : (
        'There are no contacts in your phonebook. Please add your first contact!'
      )}
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handlechange: PropTypes.func.isRequired,
  contactsCount: PropTypes.number.isRequired,
};
