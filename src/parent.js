import React from 'react';

import Child from './child';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstDancer: "Fred",
            secondDancer: "Ginger",
            chorusLine: ["Alice", "Betty", "Carol"]
        };
    }
    render() {
        return (
            <div>
                <Child text={this.state.firstDancer}>
                    <div>
                    </div> 
                    <p>Dances well</p>
                </Child>
                <Child text={this.state.chorusLine[1]}>
                    <button></button>
                </Child>
            </div>
        );
    }
}

export default Parent;
