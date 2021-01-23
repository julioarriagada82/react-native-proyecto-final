import { getPopularMovie, getDetailMovie } from '../../../services/movie/movie'

import { actions } from '../../../constants'
const { movieAction } = actions

export const fetchPopularMovieThunk = (dispatch) => {
  dispatch({ type: movieAction.START })

  const fetchPopularMovieSuccess = response => {
    dispatch({
      type: movieAction.FINISH,
      payload: response.data.results,
    })
  }

  const fetchPopularMovieFailure = response => {
    dispatch({
      type: movieAction.ERROR,
      payload: response,
    })
  }

  return getPopularMovie()
    .then(fetchPopularMovieSuccess)
    .catch(fetchPopularMovieFailure)
}

export const fetchDetailMovieThunk = (dispatch, movieId) => {
  dispatch({ type: movieAction.START_DETAIL })

  const fetchDetailMovieSuccess = response => {
    dispatch({
      type: movieAction.FINISH_DETAIL,
      payload: response.data,
    })
  }

  const fetchDetailMovieFailure = response => {
    dispatch({
      type: movieAction.ERROR_DETAIL,
      payload: response,
    })
  }

  return getDetailMovie(movieId)
    .then(fetchDetailMovieSuccess)
    .catch(fetchDetailMovieFailure)
}

