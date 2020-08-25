import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'

import TextInput from './TextInput'
import TextOutput from './TextOutput'


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        markdown: placeholder
    }


      this.updateMarkdown = this.updateMarkdown.bind(this);
  }

updateMarkdown(event){
  this.setState({
    markdown: event.target.value
  })
}

render(){

  return(
    <div className="App">
      <header className="App-header" >
        <div class=" text-center text-black bg-succes">
           <h1 className="App-title">Markdown Previewer</h1>
        </div>
      </header>

      <body class="bg-success">
        <div class="container-fluid">
            <div class="row">

            </div>
          <div class="row">
              <div class="col-6 bg-primary d-flex flex-column">
               <h2 class="text-white text-center my-3">Editor</h2>
                 <div class="form-group flex-grow-1 d-flex flex-column">

                      <TextInput value={this.state.markdown} handleInput={this.updateMarkdown} />

                 </div>
              </div>
              <div class="col-6 bg-danger">
                <h2 class="text-white text-center my-3">Preview</h2>
                 <TextOutput input={this.state.markdown}/>
              </div>
          </div>
        </div>
      </body>
    </div>
    )
  }
}

let placeholder= `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![Useful Programmer](https://usefulprogrammer.org/wp-content/uploads/2020/05/00_Leonardo_da_Vinci_-_Ginevra_de_Benci.jpg)
`

export default App;
