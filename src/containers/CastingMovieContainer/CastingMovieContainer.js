import { connect } from 'react-redux'
import {fetchCastingMovieThunk} from '../../redux/actions/casting/casting';
import {getCastingMovie} from '../../redux/selectors/casting/casting';
import CastingMovie from '../../screen/Home/CastingMovie'

const mapStateToProps = state => ({
  castingMovie: getCastingMovie(state),
})

const mapDispatchToProps = dispatch => ({
  onMount: idMovie => {
    fetchCastingMovieThunk( dispatch, idMovie )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CastingMovie)
