const INITIAL_STATE = {name: '', phone: '', shift: ''};
import { Actions } from 'react-native-router-flux';

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'EMPLOYEE_UPDATE':
      return { ...state, [action.payload.prop]: action.payload.value }
    case 'EMPLOYEE_CREATE':
      return { ...state }
    case 'EMPLOYEES_FETCH_SUCCESS':
      return { ...state, employees: action.payload }
    default:
      return state;
  }
};