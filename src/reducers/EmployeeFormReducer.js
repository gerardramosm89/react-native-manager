const INITIAL_STATE = {name: '', phone: '', shift: ''};
import { Actions } from 'react-native-router-flux';

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'EMPLOYEE_UPDATE':
      console.log('action.payload is: ', action.payload);
      return { ...state, [action.payload.prop]: action.payload.value }
    case 'EMPLOYEE_CREATE':
      console.log('from reducer CREATE EMPLOYEE');
      // Actions.employeeList({ type: 'reset' });
      return { ...state }
    default:
      return state;
  }
};