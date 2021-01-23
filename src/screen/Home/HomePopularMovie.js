import React, {Component} from 'react';
import MovieList from '../../components/Movie/MovieList';
import Header from '../../components/Common/Header';
import DropdownPicker from '../../components/Common/DropdownPicker';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../config/colors'

export default class HomePopularMovie extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onMount } = this.props
    onMount()
  }

  applyFilter = (genre) => { 
    const { goToMovieGenre } = this.props   
    const {value} = genre    
    goToMovieGenre(value)
  };

  render() {
    const {navigation, route, popularMovie, genreData} = this.props
    const genresChips = genreData.map((genre) => (
      {label: genre.name, value: genre.id , icon: () => <Icon name="video" size={18} color={colors.blue} />}
    ));
    return (
      <>
        <Header title="Peliculas Populares" />
        <DropdownPicker data={genresChips} onSelect={this.applyFilter} title={'Selecciona un genero'}></DropdownPicker>
        <MovieList route={route} navigation={navigation} popularMovie={popularMovie} />
      </>
    );
  }
}
