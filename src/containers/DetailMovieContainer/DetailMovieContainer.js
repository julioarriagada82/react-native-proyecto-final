import { connect } from 'react-redux'
import {fetchDetailMovieThunk} from '../../redux/actions/movie/movie';
import {
  getDetailMovie,
} from '../../redux/selectors/movie/movie';
import DetailMovie from '../../screen/Home/DetailMovie'

const mapStateToProps = state => ({
  detailMovie: getDetailMovie(state),
})

const mapDispatchToProps = dispatch => ({
  onMount: idMovie => {
    fetchDetailMovieThunk( dispatch, idMovie )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie)
