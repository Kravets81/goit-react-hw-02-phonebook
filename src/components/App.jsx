import React, { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  };

  handleAddContact = contact => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert('Contact alredy exists');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  contactsToDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handlechange = e => {
    this.setState({ filter: e.target.value });
  };

  handleFilterContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim());
    });
  };

  render() {
    const filteredContacts = this.handleFilterContacts();
    return (
      <div className={css.wrapper}>
        <div className={css.form__wrap}>
          <h1 className={css.form__title}>Phonebook</h1>
          <ContactsForm addContact={this.handleAddContact} />
        </div>

        <div className={css.filter__wrap}>
          <h2 className={css.filter__subtitle}>Contacts</h2>
          <Filter
            value={this.state.filter}
            handlechange={this.handlechange}
            contactsCount={this.state.contacts.length}
          />
          <ContactsList
            contacts={filteredContacts}
            contactsToDelete={this.contactsToDelete}
          />
        </div>
      </div>
    );
  }
}
