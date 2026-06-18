import { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";

import { ListStyled } from "./ContactList.styled";

class ContactList extends Component {
  render() {
    const { filterContact, handleDelete } = this.props;

    return (
      <ListStyled>
        {filterContact.map(({ id, name, number }) => {
          return (
            <ContactItem key={id} id={id} name={name} number={number} handleDelete={handleDelete} />
          );
        })}
      </ListStyled>
    );
  }
}

export default ContactList;