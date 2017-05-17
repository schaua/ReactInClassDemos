import React from 'react';
import Parent from './parent';

class AppBody extends React.Component {
    render() {
        return (
        <form>
            <p className="App-intro">
                <Parent text={this.props.myState}/>
            </p>
            <button onClick={this.props.onClick}>{this.props.myState}</button>
        </form>
        );
    }    
}

export default AppBody;