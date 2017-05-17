import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBody from './appbody';
import Container from './container';
import ComponentLife from './componentLife';

var h2Style = {
  textAlign: "right",
  color: "red",
  fontSize: "1.5em"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      myState: "Hi Augie, Welcome to React",
      life: true
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }
  clickHandler(event) {
    this.setState({ myState: "Fred says Hi" });
  }
  toggleView(event) {
    this.setState({ life: !this.state.life });
  }
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 style={h2Style}>{this.props.message}</h2>
            <Container isLoggedIn={true} />
          </div>
          {
            this.state.life?
            <ComponentLife onToggle={this.toggleView} data={this.state.myState}/>
            :
            <AppBody onClick={this.clickHandler} myState={this.state.myState} />
          }
        </div>
    );
  }
}

export default App;
