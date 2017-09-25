import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'EMPLOYEE_UPDATE',
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift}) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(res => {
      
      console.log('success response was: ', res)
      return {
        type: 'EMPLOYEE_CREATE',
        payload: res
      }
    })
    .catch(err => {
  console.log('currentUser is: ', currentUser);
  
      console.log('firebase save errored in: ', err)
      return {
        type: 'EMPLOYEE_CREATE',
        payload: err
      }
    });
};