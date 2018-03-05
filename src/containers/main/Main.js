import React, {Component} from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import App from '../app/App';
import Login from '../login/Login';

@connect( state => {
    return {
            state : state
        } 
    },
)
export default class Main extends Component{
    render(){
        const {isLogin} = this.props.state.login;
        return (
            <div>
                {isLogin ? <App /> : <Login />}
            </div>
        )
    }
};