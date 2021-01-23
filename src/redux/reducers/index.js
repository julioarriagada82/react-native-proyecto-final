import {combineReducers} from 'redux';
import login from './login/login';
import movie from './movie/movie';
import casting from './casting/casting';
import genre from './genre/genre';

const reducers = combineReducers({
  login,
  movie,
  casting,
  genre,
});

export default reducers;
