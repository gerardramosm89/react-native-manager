const INITIAL_STATE = { user: '', authError: ''  }

export default function(state = INITIAL_STATE, action) {
  console.log('action was deployed', action);
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      return { ...state, user: action.payload, authError: '' }
    case "LOGIN_USER_FAIL":
      return { ...state, authError: action.payload }
    default:
      return state;
  }
}