import React, {Component} from "react";

export const Registration = (props) => {
    return (
        <div className='login-container'>
             <h4> Registration </h4>
            <input type="text" id="login" className='form-control' />
            <input type="text" id="pass"  className='form-control'/>
            <div className='btn-container'>
                <button onClick={props.registerUser} className='btn btn-default'>Register</button>
                <button onClick={props.switchRegisterState} className='btn btn-default'>Back to login</button>
            </div>
        </div>
    )
}