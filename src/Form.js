import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
		  title: 1,
      firstName: '',
      lastName: '',
      dateOfBirth: {},
      annualIncome: '',
      employmentStatus: '',
      houseNumber: '',
      postcode: '',
      errorText: ''
		};
		
    this.processForm = this.processForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    this.handleChangeEmpStatus = this.handleChangeEmpStatus.bind(this);
	}

	validateForm(details) {
		const annualIncomeNum = 
			parseInt(details.annualIncome, 10);

		if(
  		details.firstName === ''   			||
  		details.lastName === ''    			||
  		details.dateOfBirth === {} 			||
  		details.annualIncome === ''			||
  		details.employmentStatus === '' ||
  		details.houseNumber === ''			||
  		details.postcode === ''					|| 
  		isNaN(annualIncomeNum)
  	) {
  		return false;
  	}
  	return true; 
	}

  processForm(event) {
  	event.preventDefault();

  	const userDetails = this.state;
  	const { processUserDetails } = this.props;
  	const formIsValid = this.validateForm(userDetails);
  	
  	if(!formIsValid) {
  		return this.setState({errorText: 'Missing or incorrect information'});
  	} 

  	return processUserDetails(userDetails);
  }

  handleChangeTextField(event, date) {
    if (!event) {
      return this.setState({ dateOfBirth: date });
    } 

    const field = event.target.name;
    const userDetails = this.state;  
    userDetails[field] = event.target.value;

    this.setState(userDetails);
  }
  
  handleChangeTitle(event, index, value) {
    this.setState({ title: value });    
  }

  handleChangeEmpStatus(event, index, value) {
    this.setState({ employmentStatus: value });
  }

	render() {
		return (      
      <form onSubmit={this.processForm}>
      	{ 
      		this.state.errorText !== '' && 
      		<p className="error">{this.state.errorText}</p> 
      	}

      	<p>Please enter the details below: </p>
        
        <SelectField 
          floatingLabelText="Title"
          onChange={this.handleChangeTitle}
          value={this.state.title} 
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
            onChange={this.handleChangeTextField}
            value={this.state.firstName}
          />
        </div>

        <div>
          <TextField
            name="lastName"
            floatingLabelText="Last Name"
            onChange={this.handleChangeTextField}
            value={this.state.lastName}
          />
        </div>
        <DatePicker
          name="dateOfBirth" 
          floatingLabelText="Date of Birth"
          onChange={this.handleChangeTextField}
          value={this.state.dateOfBirth}
          openToYearSelection={true} 
        />
        <div>
          <TextField
            name="annualIncome"
            floatingLabelText="Annual Income"
            onChange={this.handleChangeTextField}
            value={this.state.annualIncome}
          />
        </div>
        <SelectField 
          floatingLabelText="Employment" 
          onChange={this.handleChangeEmpStatus}
          value={this.state.employmentStatus} 
        >
          <MenuItem value={2} primaryText="Student" />
          <MenuItem value={3} primaryText="Part Time Employed" />
          <MenuItem value={1} primaryText="Full Time Employment" />
        </SelectField>
        <div>
          <TextField
            name="houseNumber"
            floatingLabelText="House Number"
            onChange={this.handleChangeTextField}
            value={this.state.houseNumber}
          />
        </div>
        <div>
          <TextField
            name="postcode"
            floatingLabelText="Postcode"
            onChange={this.handleChangeTextField}
            value={this.state.postcode}
          />
        </div>
        <RaisedButton type="submit" label="Submit details" primary />
      </form>
		);
	}
}