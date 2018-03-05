const LOGIN = 'LOGIN';
const SWITCH_REGISTRATION = 'SWITCH_REGISTRATION';
const ADD_USER = 'ADD_USER';

const initialState = {
    isLogin : false,
    isRegistration : false,
    users:  [
        {
            login: 'Alex',
            pass: '1111'
        },
    ],
}

export function loginAction(payload){
    return {
        type: LOGIN,
        payload
    }
}

export function switchRegistration(payload){
    return {
        type: SWITCH_REGISTRATION,
        payload
    }
} 

export function addUser(payload){
    return {
        type: ADD_USER,
        payload
    }
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case LOGIN: 
            return{
                ...state, 
                isLogin: true 
            }
        case SWITCH_REGISTRATION: 
            return{
                ...state, 
                isRegistration: !state.isRegistration 
            }
        case ADD_USER: 
            console.log(state);
            console.log(action);
            return{
                ...state, 
                users: state.users.concat(action.payload) 
            }
        default:
            return state
    }
}