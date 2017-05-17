import React from 'react';

import Child from './child';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.state = {
            firstDancer: "Fred",
            secondDancer: "Ginger",
            chorusLine: ["Alice", "Betty", "Carol"]
        };
    }
    inputChangedHandler(event){
        this.setState({firstDancer: event.target.value})
    }
    render() {
        return (
            <div>
                <Child 
                onChange={this.inputChangedHandler} 
                text={this.state.firstDancer} >
                    <div>
                    </div> 
                    <p>Dances well</p>
                </Child>
            </div>
        );
    }
}

export default Parent;
