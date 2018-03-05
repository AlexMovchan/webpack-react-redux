import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../modules/combineReducer';

export default function configureStore(initialState){
    const store = createStore(combineReducers, initialState);
    return store;
}