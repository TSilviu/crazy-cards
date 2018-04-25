import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      user: {
        title: 1,
        firstName: '',
        lastName: '',
        dateOfBirth: {},
        annualIncome: '',
        employmentStatus: '',
        houseNumber: '',
        postcode: ''
      }
    }

    this.processForm = this.processForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeEmpStatus = this.handleChangeEmpStatus.bind(this);
  }

  processForm() {

  }

  handleChange(event, date) {
    if (!event) {
      const newUser = {...this.state.user, dateOfBirth: date};
      return this.setState({ user: newUser });
    } 

    const field = event.target.name;
    const user = this.state.user;  
    user[field] = event.target.value;

    this.setState({user});
  }
  
  handleChangeTitle(event, index, value) {
    const newUser = {...this.state.user, title: value};
    this.setState({ user: newUser});    
  }

  handleChangeEmpStatus(event, index, value) {
    const newUser = {
      ...this.state.user, 
      employmentStatus: value
    };

    this.setState({ user: newUser});
  }

  render() {
    return (
      <div>
        <AppBar title="Crazy Cards"/>

        <div className="App">
          <p>Please enter the details below: </p>
          
          <form onSubmit={this.processForm}>
            <SelectField 
              floatingLabelText="Title" 
              onChange={this.handleChangeTitle}
              value={this.state.user.title} 
            >
              <MenuItem value={1} primaryText="Mr" />
              <MenuItem value={2} primaryText="Mrs" />
              <MenuItem value={3} primaryText="Miss" />
              <MenuItem value={4} primaryText="Ms" />
            </SelectField>

            <div>
              <TextField
                name="firstName"
                floatingLabelText="First Name"
                onChange={this.handleChange}
                value={this.state.user.firstName}
              />
            </div>

            <div>
              <TextField
                name="lastName"
                floatingLabelText="Last Name"
                onChange={this.handleChange}
                value={this.state.user.lastName}
              />
            </div>
            <DatePicker
              name="dateOfBirth" 
              floatingLabelText="Date of Birth"
              onChange={this.handleChange}
              value={this.state.user.dateOfBirth}
              openToYearSelection={true} 
            />
            <div>
              <TextField
                name="annualIncome"
                floatingLabelText="Annual Income"
                onChange={this.handleChange}
                value={this.state.user.annualIncome}
              />
            </div>
            <SelectField 
              floatingLabelText="Employment Status" 
              onChange={this.handleChangeEmpStatus}
              value={this.state.user.employmentStatus} 
            >
              <MenuItem value={1} primaryText="Full Time Employment" />
              <MenuItem value={2} primaryText="Student" />
              <MenuItem value={3} primaryText="Part Time Employed" />
            </SelectField>
            <div>
              <TextField
                name="houseNumber"
                floatingLabelText="House Number"
                onChange={this.handleChange}
                value={this.state.user.houseNumber}
              />
            </div>
            <div>
              <TextField
                name="postcode"
                floatingLabelText="Postcode"
                onChange={this.handleChange}
                value={this.state.user.postcode}
              />
            </div>
            <RaisedButton type="submit" label="Submit details" primary />
          </form>
        </div>
      </div>
    );
  }
}

export default App;