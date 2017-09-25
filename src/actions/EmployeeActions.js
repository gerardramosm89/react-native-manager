import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'EMPLOYEE_UPDATE',
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift}) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(res => {
      console.log('Attempting to re-route from actions');
      Actions.main({ type: 'reset' });
      dispatch({
        type: 'EMPLOYEE_CREATE',
        payload: res
      });
    })
    .catch(err => {
      console.log('firebase save errored in: ', err)
      dispatch({
        type: 'EMPLOYEE_CREATE',
        payload: err
      })
    });
  }
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: 'EMPLOYEES_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
}