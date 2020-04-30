import React, { Component } from 'react';

class AddNoteBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchterm: '' };
  }

  onSubmit = (event) => {
    this.props.add({
      title: this.state.searchterm,
      text: '',
      x: 300,
      y: 300,
    });
    event.preventDefault();
  }

  onInputChange = (event) => {
    this.setState({ searchterm: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div id="AddNoteBar">
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onInputChange} value={this.state.searchterm} />
          <input type="submit" value="Create Note" />
        </form>
      </div>
    );
  }
}
export default AddNoteBar;
