import React, { Component } from "react";
import ContactForm from "../ContactForm";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;
  
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.name, this.state.email, this.state.message)
    

    this.setState({
      firstName: "",
      lastName: "",
      message: "",
    });
  };

  render() {
    return (
      <ContactForm
        onChange ={this.handleInputChange}
        onClick={this.handleFormSubmit}
        name={this.state.name}
        email={this.state.email}
        message={this.state.message}
      />
    );
  }
}

export default Contact;
