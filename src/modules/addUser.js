const ADD_USER = 'ADD_USER';
const GET_USER = 'GET_USER';

const newUser = {
    userName: 'NEWname',
    userPass: '1111'
}

const initialState = {
    year: 2018,
    userData : []
}

const addData = [
    {name: 'test1', surname: 'surname1'},
    {name: 'test2', surname: 'surname2'},
    {name: 'test3', surname: 'surname3'},
    {name: 'test4', surname: 'surname4'},
    {name: 'test5', surname: 'surname5'},
    {name: 'test6', surname: 'surname6'},
    {name: 'test7', surname: 'surname7'},

]

export function getUser(payload){
    return {
        type: GET_USER,
        payload
    }
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_USER:
            return {
                ...state,
                userData: addData
            }
          
        default:
            return state
    }
}