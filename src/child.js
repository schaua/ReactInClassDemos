import React from 'react';

class Child extends React.Component{
    render() {
        return (
            <div className="row col-md-4 col-md-offset-4" style={{border: '1px solid black', backgroundColor: 'pink'}}>
                Controlled:
            <input value={this.props.text}/>
            <br/>
            Uncontrolled:
            <input placeholder="Enter text here"/>
            </div>
        );
    }
}

export default Child;