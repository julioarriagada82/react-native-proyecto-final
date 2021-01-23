import { getCastingMovie } from '../../../services/casting/casting'

import { actions } from '../../../constants'
const { castingAction } = actions

export const fetchCastingMovieThunk = (dispatch, movieId) => {
  dispatch({ type: castingAction.START })

  const fetchCastingMovieSuccess = response => {
    dispatch({
      type: castingAction.FINISH,
      payload: response.data.credits.cast,
    })
  }

  const fetchCastingMovieFailure = response => {
    dispatch({
      type: castingAction.ERROR,
      payload: response,
    })
  }

  return getCastingMovie(movieId)
    .then(fetchCastingMovieSuccess)
    .catch(fetchCastingMovieFailure)
}