import { Component } from "react";
import { Span, Button, LiStyled, TextStyled } from "./ContactItem.styled";

class ContactItem extends Component {
  render() {
    const { id, name, number, handleDelete } = this.props;

    return (
      <LiStyled>
        <TextStyled>
          {name}: <Span>{number}</Span>
        </TextStyled>
        <Button type="button" onClick={() => handleDelete(id)}>Видалити</Button>
      </LiStyled>
    );
  }
}

export default ContactItem;
