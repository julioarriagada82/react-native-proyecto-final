import { actions } from '../../../constants'
const { castingAction } = actions

const defaultState = {
  loading: false,
  castingMovie: [],
}

const casting = (state = defaultState, action) => {
    switch (action.type) {
        case castingAction.START:
          return {
            ...state,
            loading: true,
          }
        case castingAction.FINISH:
          return {
            ...state,
            loading: false,
            castingMovie: action.payload,
          }
        case castingAction.ERROR:
          return {
            ...state,
            loading: false,
            castingMovie: [],
            errorCastingMovieMessage: action.payload,
          }
        default:
          return state
    }
  };
  
  export default casting;
  