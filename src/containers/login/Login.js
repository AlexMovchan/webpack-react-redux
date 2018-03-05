import React, {Component} from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../../modules/login';
import swal from 'sweetalert';
import {Logination} from '../../components/login/logination';
import {Registration} from '../../components/login/registration';
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
        let name = document.getElementById('login').value,
            pass = document.getElementById('pass').value,
            {addUser, switchRegistration} = this.props.pageActions;
        
        if(name.length >= 4 && pass.length >= 4){
            addUser({login: name, pass: pass});
            const content = document.createElement('div');
                content.innerHTML = `<br/> <strong>Login</strong> - ${name}<br/> <strong>Password</strong> - ${pass}`;
            
            swal({
                title: "Success!",
                icon: "success",
                content: content
            })
            document.getElementById('login').value = '';
            document.getElementById('pass').value ='';
            switchRegistration();
        }else {
            return name.length >= 4 ? swal('Error!', 'Password must contain minimum 4 symbols', 'error') : swal('Error!', 'Login must contain minimum 4 symbols', 'error')
        }
    }

    render(){
        return (
            <div>
                { this.props.isRegistration ? 
                    <Registration switchRegistration={this.props.pageActions.switchRegistration} registerUser={this.registerUser}/> 
                    : 
                    <Logination switchRegistration={this.props.pageActions.switchRegistration} checkIsLogin={this.checkIsLogin}/>}
            </div>
        )
    }
}


