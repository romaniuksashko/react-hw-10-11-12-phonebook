import { Component } from "react";
import { DivStyled, InputStyled } from "./Filter.styled";

class Filter extends Component {
  render() {
    const { filter, handleFilter } = this.props;

    return (
      <DivStyled>
        <label htmlFor="filter">Find contacts by name: </label>
        <InputStyled type="text" value={filter} onChange={handleFilter} id="filter" />
      </DivStyled>
    );
  }
}

export default Filter;
