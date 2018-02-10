import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAZL6-57prKGwv-BZw0uBRacpom7KdrJ4g",
    authDomain: "todolist-5da55.firebaseapp.com",
    databaseURL: "https://todolist-5da55.firebaseio.com",
    projectId: "todolist-5da55",
    storageBucket: "todolist-5da55.appspot.com",
    messagingSenderId: "827554261852"
};
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
