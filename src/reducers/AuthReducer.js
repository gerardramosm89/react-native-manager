const INITIAL_STATE = { user: '', authError: '', loading: false  }

export default function(state = INITIAL_STATE, action) {
  console.log('action was deployed', action);
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      return { ...state, user: action.payload, authError: '', loading: false }
    case "LOGIN_USER_FAIL":
      return { ...state, authError: action.payload, loading: false }
    case "LOGIN_USER":
      return { ...state, loading: true, authError: '' }
    default:
      return state;
  }
}