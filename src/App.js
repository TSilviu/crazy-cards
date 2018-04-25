import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      user: {}
    }

    this.processUserDetails = this.processUserDetails.bind(this);
  }

  processUserDetails(details) {
  }

  render() {
    return (
      <div>
        <AppBar title="Crazy Cards"/>
        <div className="App">
          <Form processUserDetails={this.processUserDetails} />
        </div>
      </div>
    );
  }
}

export default App;