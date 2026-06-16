import { Component } from "react";

class Filter extends Component {
  render() {
    const { filter, handleFilter } = this.props;

    return (
      <div>
        <label htmlFor="filter">Find contacts by name </label>
        <input type="text" value={filter} onChange={handleFilter} id="filter" />
      </div>
    );
  }
}

export default Filter;
