import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactsList({ contacts, contactsToDelete }) {
  return (
    <ul className={[css.contact__list]}>
      {contacts.map(contact => {
        return (
          <li className={[css.contact__item]} key={contact.id}>
            <span className={[css.contact__span__name]}>{contact.name}</span>:
            <span className={[css.contact__span__number]}>
              {contact.number}
            </span>
            <button
              className={[css.contact__button]}
              onClick={() => contactsToDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  contactsToDelete: PropTypes.func.isRequired,
};
