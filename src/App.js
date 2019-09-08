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
    customEmailLabel: "Email",
    customEmailPlaceholder: "Enter your email",
    customEmailValue: ""
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

  onCustomInputFieldChange = (event, targetState) => {
    this.setState({
      [targetState]: event.target.value,
    });
  };

  submitForm = () => {
    // form submission logic goes here...
  };

  render() {
    console.log('Render');

    const { 
      inputValue, 
      customInputLabel, 
      customInputPlaceholder,
      customInputValue,
      customEmailPlaceholder,
      customEmailValue,
      customEmailLabel
    } = this.state;

    return(
      <>
        <div>Hello World!</div>
        <input 
          value={inputValue} 
          placeholder="Add text here"
          onChange={this.onInputChange}
        />
        <form onSubmit={this.submitForm}>
          <CustomInputField
            type={'text'}
            label={customInputLabel}
            placeholder={customInputPlaceholder}
            value={customInputValue}
            onCustomFieldChange={this.onCustomInputFieldChange}
            targetState={"customInputValue"}
          />
          <CustomInputField
            type={'email'}
            label={customEmailLabel}
            placeholder={customEmailPlaceholder}
            value={customEmailValue}
            onCustomFieldChange={this.onCustomInputFieldChange}
            targetState={"customEmailValue"}
          />
        </form>
      </>
    )
  }
}

export default App;