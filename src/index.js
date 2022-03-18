import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCul6P-gftbWLU0ZViWUp5H3Hu5CJJbARQ",
  authDomain: "chat-findyoutarts.firebaseapp.com",
  projectId: "chat-findyoutarts",
  storageBucket: "chat-findyoutarts.appspot.com",
  messagingSenderId: "522247634042",
  appId: "1:522247634042:web:a7150a75cc3ad335120fc3",
  measurementId: "G-76CSQ3TGWQ"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
