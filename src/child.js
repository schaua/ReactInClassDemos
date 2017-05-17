import React from 'react';

class Child extends React.Component{
    // constructor(){
    //     super();
    // }

    render() {
        return (
            <div className="row col-md-4 col-md-offset-4" style={{border: '1px solid black', backgroundColor: 'pink'}}>
                Controlled:
            <input onChange={this.props.onChanged} value={this.props.text}/>
            <br/>
            Controlled:
            <input placeholder="Enter text here" value={this.props.text}/>
            </div>
        );
    }
}

export default Child;