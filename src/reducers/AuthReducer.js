const INITIAL_STATE = { email: '' }

export default function(state = INITIAL_STATE, action) {
  console.log('action was deployed', action);
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      return { ...state, user: action.payload }
    default:
      return state;
  }
}