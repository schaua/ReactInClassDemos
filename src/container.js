import React, {Component} from 'react';

class Signout extends Component{
    render(){
        return (
            <div>logout</div>
        );
    }
}

class Login extends Component{
    render() {
        return (
            <div>
                <label>Log in<input type="text" 
            id="username" 
            placeholder={this.props.placeholderText} /></label></div>
        );
    }
}

class Container extends Component {
    render() {
        return (
            <div>
                {this.props.isLoggedIn ? <Signout/> : <Login placeholderText="Ringo"/>}
            </div>
        );
    }
}

export default Container;