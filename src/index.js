import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Main from './containers/main/Main';


const store = configureStore()


ReactDOM.render(
<Provider store={store}>
    <Main />
</Provider>, 
document.getElementById("app"));