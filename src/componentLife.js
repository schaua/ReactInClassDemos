import React from 'react';

class ComponentLife extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data};
        this.onHandleClick = this.onHandleClick.bind(this);
}
    onHandleClick(){
            this.setState({data: ""});
    }
   render() {
       return ( 
       <div>
           This is the ComponentLife component
           <button onClick={this.props.onToggle}>{this.props.data}</button>;
       </div>
       );
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    componentWillReceiveProps(){
        console.log("componentDidMount");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
}

export default ComponentLife;