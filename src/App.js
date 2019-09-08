import React, { Component } from 'react';
import CustomInputField from './CommonComponents/CustomInputField/CustomInputField';
import './App.css';

class App extends Component {

  constructor() {
    super();

    console.log('Constructor');
  }

  state = {
    inputValue: "Dani",
    customInputLabel: "Name",
    customInputPlaceholder: "Enter your name",
    customInputValue: "Custom field!",
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

    const { 
      inputValue, 
      customInputLabel, 
      customInputPlaceholder,
      customInputValue
    } = this.state;

    return(
      <>
        <div>Hello World!</div>
        <input 
          value={inputValue} 
          placeholder="Add text here"
          onChange={this.onInputChange}
        />
        <CustomInputField
          label={customInputLabel}
          placeholder={customInputPlaceholder}
          value={customInputValue}
        />
      </>
    )
  }
}

export default App;