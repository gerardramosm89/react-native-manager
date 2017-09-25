import firebase from 'firebase';
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
            loginUserSuccess(dispatch, user, Actions);
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

const loginUserSuccess = (dispatch, user, Actions) => {
  dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
}