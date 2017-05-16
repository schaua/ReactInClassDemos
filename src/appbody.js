import React from 'react';

class AppBody extends React.Component {
    render() {
        return (
        <div>
            <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={this.props.onClick}>{this.props.myState}</button>
        </div>
        );
    }    
}

export default AppBody;