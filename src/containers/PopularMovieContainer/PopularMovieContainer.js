import { connect } from 'react-redux'
import { fetchPopularMovieThunk, } from '../../redux/actions/movie/movie';
import {
  fetchGenreMovieThunk, 
  fetchMovieByGenreThunk 
} from '../../redux/actions/genre/genre';
import { getPopularMovie, } from '../../redux/selectors/movie/movie';
import {
  getGenreData,
  getGenreMovie,
} from '../../redux/selectors/genre/genre';
import HomePopularMovie from '../../screen/Home/HomePopularMovie'

const mapStateToProps = state => ({
  genreData: getGenreData(state),
  popularMovie:
    getGenreMovie(state).length > 0 
      ? getGenreMovie(state)
      : getPopularMovie(state),
})

const mapDispatchToProps = dispatch => ({
  onMount: () => {
    fetchPopularMovieThunk(dispatch),
    fetchGenreMovieThunk(dispatch)
  },
  goToMovieGenre: idGenre => {
    fetchMovieByGenreThunk(
      dispatch,
      idGenre,
    )
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePopularMovie)
