import firebase from 'firebase';

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      })
      .catch((err) => {
        console.log('error was: ', err.message);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
          })
          .catch(err => {
            console.log('tried to create account but error was: ', err.message);
          });
      });
  }
};