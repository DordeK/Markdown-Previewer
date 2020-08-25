
import React, { Component } from 'react';
import './App.css';
const marked = require('marked');

class TextOutput extends Component {
  markItUp(a) {
    return {__html: a};
  }
  render() {
    return (
      <div
        dangerouslySetInnerHTML = {this.markItUp(marked(this.props.input))}
        className="box right"
        id="preview"
/>
    );
  }
}

export default TextOutput;
