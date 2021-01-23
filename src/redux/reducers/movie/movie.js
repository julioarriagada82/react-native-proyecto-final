import { actions } from '../../../constants'
const { movieAction } = actions

const defaultState = {
  loading: false,
  data: [],
  detailMovie: [],
}

const movie = (state = defaultState, action) => {
    switch (action.type) {
        case movieAction.START:
          return {
            ...state,
            loading: true,
          }
        case movieAction.START_DETAIL:
          return {
            ...state,
            loading: true,
          }
        case movieAction.FINISH:
          return {
            ...state,
            loading: false,
            data: action.payload,
          }
        case movieAction.FINISH_DETAIL:
          return {
            ...state,
            loading: false,
            detailMovie: action.payload,
          }
        case movieAction.ERROR:
          return {
            ...state,
            loading: false,
            data: [],
            genreMovie: [],
            errorPopularMovieMessage: action.payload,
          }
        case movieAction.ERROR_DETAIL:
          return {
            ...state,
            loading: false,
            detailMovie: [],
            errorDetailMovieMessage: action.payload,
          }
        default:
          return state
    }
  };
  
  export default movie;
  