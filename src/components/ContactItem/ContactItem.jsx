import { Component } from "react";

class ContactItem extends Component {
  render() {
    const { id, name, number, handleDelete } = this.props;

    return (
      <li>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => handleDelete(id)}>Видалити</button>
      </li>
    );
  }
}

export default ContactItem;
