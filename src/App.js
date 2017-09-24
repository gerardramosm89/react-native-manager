import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAftCvNAlAAGA2Jwz9CoSMnMo3nRVO5Kaw",
      authDomain: "rn-auth-898be.firebaseapp.com",
      databaseURL: "https://rn-auth-898be.firebaseio.com",
      projectId: "rn-auth-898be",
      storageBucket: "rn-auth-898be.appspot.com",
      messagingSenderId: "1046040963108"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <LoginForm />
      </Provider>
    );
  }
}