import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
console.log('Actions from the outside is: ', Actions);

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_USER' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      })
      .catch((err) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            loginUserSuccess(dispatch, user);
            // console.log("Hit this one");
            // console.log('we successfully loggedin, Actions is: ', Actions);
            // console.log("Actions", Actions);
            // Actions.employeeList();
            // dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
          })
          .catch(err => {
            loginUserFail(dispatch, err);
          });
      });
  }
};

function loginUserFail(dispatch, err) {
  dispatch({ type: 'LOGIN_USER_FAIL', payload: err.message })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
  Actions.employeeList();  
}