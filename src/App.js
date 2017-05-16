import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBody from './appbody';
import Container from './container';

class App extends Component {
  constructor(props){ 
    super(props);
    this.state = {myState: this.props.message};
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event){ 
    this.setState( {myState: "Fred says Hi"});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.message}</h2>
          <Container isLoggedIn={true} />
        </div>
        <AppBody onClick={this.clickHandler} myState={this.state.myState}/>
        </div>
    );
  }
}

export default App;
