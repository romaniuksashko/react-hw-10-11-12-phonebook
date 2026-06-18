import { Component } from "react";
import { nanoid } from "nanoid";

import { ButtonStyled, FormStyled, InputStyled, LabelStyled } from "./ContactForm.style";

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
      <FormStyled onSubmit={this.handleSubmit}>
        <LabelStyled htmlFor="name">Name: </LabelStyled>
        <InputStyled
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          required
          onChange={this.handleName}
          id="name"
        />
        <LabelStyled htmlFor="number">Number: </LabelStyled>
        <InputStyled
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
          required
          onChange={this.handleNumber}
          id="number"
        />
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    );
  }
}

export default ContactForm;
