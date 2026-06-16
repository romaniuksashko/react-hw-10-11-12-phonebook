import { Component } from "react";
import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleNumber = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value,
    };

    this.props.handleAdd(newContact);

    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          required
          onChange={this.handleName}
          id="name"
        />
        <br />
        <label htmlFor="number">Number </label>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
          required
          onChange={this.handleNumber}
          id="number"
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
