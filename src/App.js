import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    console.log('Constructor');
  }

  state = {
    inputValue: "Dani",
  };

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  onInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    console.log('Render');

    const { inputValue } = this.state;

    return(
      <>
        <div>Hello World!</div>
        <input 
          value={inputValue} 
          placeholder="Add text here"
          onChange={this.onInputChange}
        />
      </>
    )
  }
}

export default App;