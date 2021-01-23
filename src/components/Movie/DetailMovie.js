import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Animated, } from 'react-native';
import MovieImage from './MovieImage';
import CastingMovieContainer from '../../containers/CastingMovieContainer/CastingMovieContainer'
import colors from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  textColor: {
    color: colors.blue_dark,
  },
  name: {
    fontSize: 18,
    padding: 10,
  },
});

const DetailMovie = ({idMovie, validImage,  detailMovie: {original_title, overview, poster_path} }) => (
    <Animated.View style={[styles.container]}>
    <MovieImage
      validImage={validImage}
      posterurl={poster_path}
      onError={this.invalid}
      imageOnLongPress={this.toggleFullScreenImage}
    />
    <Text style={[styles.name, styles.textColor]}>{original_title}</Text>
    <Text style={[styles.name, styles.textColor]}>{overview}</Text>
    <CastingMovieContainer idMovie={idMovie} />
    
  </Animated.View>
);

DetailMovie.propTypes = {
  idMovie: PropTypes.number.isRequired,
  validImage: PropTypes.bool,
}

export default DetailMovie;
