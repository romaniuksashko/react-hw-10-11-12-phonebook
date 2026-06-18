import { Component } from 'react'
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };


  handleFilter = (event) => {
    this.setState({
      filter: event.target.value,
    })
  }

  handleDelete = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((item) => item.id !== contactId),
    }));
  }

  handleAdd = (newContact) => {
    const dublicateName = this.state.contacts.some(({name}) => {
      return name.toLowerCase() === newContact.name.toLowerCase();
    })

    if (dublicateName) {
      alert(`${newContact.name} уже є в контактах`);
      return;
    }

    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, newContact],
      };
    });    
  }

  render() {
    const { contacts, filter, name, number } = this.state;

    const filterContact = contacts.filter((item) => item.name.toLowerCase().trim().includes(filter.toLowerCase().trim()))

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleAdd={this.handleAdd} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />

        <ContactList filterContact={filterContact} handleDelete={this.handleDelete} />
      </>
    );
  }
}

export default App
