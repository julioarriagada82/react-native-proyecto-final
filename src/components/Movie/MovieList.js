import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
} from 'react-native';
import MovieCard from './MovieCard';
import colors from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  filterButton: {
    position: 'absolute',
    top: '90%',
    left: '80%',
    backgroundColor: colors.yellow,
    borderRadius: 30,
    padding: 10,
  },
});

const MovieList = ({navigation, route, popularMovie}) => (
  <>
    <FlatList
      style={styles.container}
      data={popularMovie}
      keyExtractor={({id}) => id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item: {id, original_title, poster_path, release_date, title, vote_average, vote_count}}) => (
        <MovieCard
          id={id}
          original_title={original_title}
          poster_path={poster_path}
          release_date={release_date}
          title={title}
          vote_average={vote_average}
          vote_count={vote_count}
          navigation={navigation}
          route={route}
        />
      )}
    />
  </>
);

MovieList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  popularMovie: PropTypes.arrayOf(
      PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  })),
}

export default MovieList;