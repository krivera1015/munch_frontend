import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//importing provider to give all components access to store
import { Provider } from 'react-redux'

//import redux stroe
import { createStore } from 'redux'

//import reducer which will communciate with store
import reducer from './redux/reducer.js'

//wrapping my whole App container in Provider
ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
