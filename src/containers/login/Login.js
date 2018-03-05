import React, {Component} from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../../modules/login';
import swal from 'sweetalert';
import {Logination} from './logination';
import {Registration} from './registration';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';


@connect(state => {
    return {
        isLogin: state.login.isLogin,
        users: state.login.users,
        isRegistration : state.login.isRegistration,
    }
},(dispatch) => {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}
)
export default class Login extends Component{
    checkIsLogin=(e) => {
        const name = document.getElementById('login').value,
              pass = document.getElementById('pass').value,
              {users} = this.props,        
              {loginAction, switchRegistration, addUser} = this.props.pageActions;

        let isAutentificated = 0;
        users.map(user => {
            if(user.login === name && user.pass === pass){
                isAutentificated += 1
            }
        });
        (isAutentificated >= 1) ? loginAction() : swal('Login failed!', 'Login or password incorrect', 'error');
    }

    registerUser = () => {
        const name = document.getElementById('login').value,
              pass = document.getElementById('pass').value,
              {addUser} = this.props.pageActions;
        addUser({login: name, pass: pass});
    }

    render(){
        return (
            <div>
                { this.props.isRegistration ? 
                    <Registration switchRegisterState={this.props.pageActions.switchRegistration} registerUser={this.registerUser}/> 
                    : 
                    <Logination switchRegistration={this.props.pageActions.switchRegistration} checkIsLogin={this.checkIsLogin}/>}
            </div>
        )
    }
}


