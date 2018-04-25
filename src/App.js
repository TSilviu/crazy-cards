import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import isEmpty from 'lodash/isEmpty';

import CardsDashboard from './CardsDashboard';
import Form from './Form';
import './App.css';
import cards from './cards';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      user: {},
      availableCards: [cards.anywhere]
    }

    this.processUserDetails = this.processUserDetails.bind(this);
  }

  processUserDetails(details) {
    const { employmentStatus, annualIncome } = details;
    const { availableCards } = this.state;
    const annualIncomeNum = parseInt(annualIncome, 10);

    if(annualIncomeNum > 16000) {
      availableCards.push(cards.liquid);
    }

    if(employmentStatus === 2){
      availableCards.pop();
      availableCards.push(cards.studentLife);
    }
    
    this.setState({...this.state, availableCards: availableCards});
    this.setState({...this.state, user: details});
  }

  render() {
    return (
      <div>
        <AppBar title="Crazy Cards"/>
        <div className="App">
          {
            isEmpty(this.state.user) ?
            <Form processUserDetails={this.processUserDetails} />
            :
            <CardsDashboard cards={this.state.availableCards}/> 
          }
        </div>
      </div>
    );
  }
}

export default App;