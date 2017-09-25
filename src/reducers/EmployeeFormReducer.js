const INITIAL_STATE = {name: '', phone: '', shift: ''};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'EMPLOYEE_UPDATE':
      console.log('action.payload is: ', action.payload);
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
};