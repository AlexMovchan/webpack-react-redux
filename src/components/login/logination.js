import React, {Component} from "react";
export const Logination = (props) => {
    return (
        <div className='login-container'> 
            <h4> Login page </h4>
            <input type="text" id="login" className='form-control' />
            <input type="text" id="pass"  className='form-control'/>
            <div className='btn-container'>
                <button onClick={props.checkIsLogin} className='btn btn-default'>Login</button>
                <button onClick={props.switchRegistration} className='btn btn-default'>Register</button>
            </div>
        </div>
    )
}