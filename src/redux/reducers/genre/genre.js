import { actions } from '../../../constants'
const { genreAction } = actions

const defaultState = {
  loading: false,
  genreMovie: [],
  genreData: [],
}

const genre = (state = defaultState, action) => {
    switch (action.type) {
        case genreAction.START:{
          return {
            ...state,
            loading: true,
          }
        }
        case genreAction.START_GENRE: {
          return {
            ...state,
            loading: true,
          }
        }
        case genreAction.FINISH: {
          return {
            ...state,
            loading: false,
            genreData: action.payload,
          }
        }
        case genreAction.FINISH_GENRE: {
          return {
            ...state,
            loading: false,
            genreMovie: action.payload,
          }
        }
        case genreAction.ERROR:
            return {
              ...state,
              loading: false,
              genreData: [],
              errorGenreMovieMessage: action.payload,
            }
        case genreAction.ERROR_GENRE:
          return {
            ...state,
            loading: false,
            genreMovie: [],
            errorGenreMovieMessage: action.payload,
          }
        default:
          return state
    }
  };
  
  export default genre;
  