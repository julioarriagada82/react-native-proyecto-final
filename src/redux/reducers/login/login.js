import { actions } from '../../../constants'
const { userAction } = actions

const defaultState = {
  valid: undefined,
  sessionId: null,
  loading: false,
};

// Login Reducer o estados de Login
const login = (state = defaultState, action) => {
  switch (action.type) {
    case userAction.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case userAction.END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case userAction.LOGIN_SUCCESSFULL:
      return {
        ...state,
        valid: action.valid,
        sessionId: action.sessionId,
      };
    case userAction.LOGOUT:
      return {
        valid: action.valid,
      };
    default:
      return state;
  }
};

export default login;
