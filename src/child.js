import React from 'react';

class Child extends React.Component{
    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
}

export default Child;