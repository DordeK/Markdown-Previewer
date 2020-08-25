import React, { Component } from 'react';
import './App.css';

class TextInput extends Component {
  render() {
    return (
      <textarea
        name="input"
        rows="50"
        placeholder="type here stupid..."
        value={this.props.value}
        onChange={this.props.handleInput}

        id="editor">
      </textarea>
    );
  }
}

export default TextInput;
