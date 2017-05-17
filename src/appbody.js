import React from 'react';
import Parent from './parent';

class AppBody extends React.Component {
    render() {
        return (
        <div>
            <p className="App-intro">
                <Parent />
            </p>
            <button onClick={this.props.onClick}>{this.props.myState}</button>
        </div>
        );
    }    
}

export default AppBody;