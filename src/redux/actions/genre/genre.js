import { getGenreMovie, getMovieByGenre } from '../../../services/genre/genre'

import { actions } from '../../../constants'
const { genreAction } = actions

export const fetchGenreMovieThunk = (dispatch) => {
    dispatch({ type: genreAction.START })
  
    const fetchGenreMovieSuccess = response => {
      dispatch({
        type: genreAction.FINISH,
        payload: response.data.genres,
      })
    }
  
    const fetchGenreMovieFailure = response => {
      dispatch({
        type: genreAction.ERROR,
        payload: response,
      })
    }
  
    return getGenreMovie()
      .then(fetchGenreMovieSuccess)
      .catch(fetchGenreMovieFailure)
  }

export const fetchMovieByGenreThunk = (dispatch, genreId) => {
    dispatch({ type: genreAction.START_GENRE })
  
    const fetchMovieByGenreSuccess = response => {
      dispatch({
        type: genreAction.FINISH_GENRE,
        payload: response.data.results,
      })
    }
  
    const fetchMovieByGenreFailure = response => {
      dispatch({
        type: genreAction.ERROR_GENRE,
        payload: response,
      })
    }
  
    return getMovieByGenre(genreId)
      .then(fetchMovieByGenreSuccess)
      .catch(fetchMovieByGenreFailure)
  }