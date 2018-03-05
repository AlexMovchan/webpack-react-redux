import React, {Component} from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../../modules/addUser';
import './style.css';


@connect( state => {
    return {
            users : state.addUser.users,
            year : state.addUser.year,
            userData: state.addUser.userData
        } 
    },(dispatch) => {
        return {
            pageActions: bindActionCreators(pageActions, dispatch)
        }
    }
)
export default class App extends Component{
    componentDidMount(){
        this.props.pageActions.getUser()
    }

    render(){
        const {uses, year, userData} = this.props;
        const {addUser, getUser} = this.props.pageActions;

        return (
            <div>
                <h2 className='text-center'>User data-table </h2>
                <table className='table text-center'>
                    <thead className='table-dark'>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Surname</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map( (item,index) =>{
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                </tr>
                            )  
                          })
                        }
                    </tbody>
                </table>
                <button className='btn btn-default' onClick={addUser}>Add</button>
            </div>
        )
    }
};
