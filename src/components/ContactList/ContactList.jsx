import { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";

class ContactList extends Component {
  render() {
    const { filterContact, handleDelete } = this.props;

    return (
      <ul>
        {filterContact.map(({ id, name, number }) => {
          return (
            <ContactItem key={id} id={id} name={name} number={number} handleDelete={handleDelete} />
          );
        })}
      </ul>
    );
  }
}

export default ContactList;