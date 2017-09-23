import firebase from 'firebase';

export const loginUser = ({ email, password }) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => console.log(user));
};