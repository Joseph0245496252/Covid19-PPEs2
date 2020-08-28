import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store";
import firebase from "./config/fbconfig";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";


const rrfConfig = {}
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}

ReactDOM.render(
    <>
        <Provider store={store} >
            <ReactReduxFirebaseProvider {...rrfProps}>

                <App />

            </ReactReduxFirebaseProvider>
        </Provider>
    </>
    , document.getElementById('root')

);
