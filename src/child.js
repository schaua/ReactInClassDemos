import React from 'react';

class Child extends React.Component{
    // constructor(){
    //     super();
    // }

    render() {
        return (
            <div className="row col-md-4 col-md-offset-4" style={{border: '1px solid black', backgroundColor: 'pink'}}>
                Controlled:
                <input 
                onChange={this.props.onChange} 
                value={this.props.text}/>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default Child;