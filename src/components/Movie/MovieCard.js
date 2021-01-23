import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Animated, TouchableOpacity, } from 'react-native';
import Rating from '../Common/Rating';
import ImageCard from '../Common/ImageCard';
import MovieFullScreenImage from './MovieFullScreenImage';
import { formatToNumber } from '../../formatter/formatter'
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
  description: {
    fontSize: 15,
    padding: 10,
  },
  rating: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heart: {
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 30,
    padding: 5,
    backgroundColor: 'white',
  },
});

export default class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validImage: true,
      starRating: 1,
      fadeAnimation: new Animated.Value(0),
      like: false,
      fullScreenImage: false,
    };
  }

  componentDidMount = () => {
    this.animateArtistCard();
  };

  invalid = () => this.setState({validImage: false});

  starRatingSet = (index) => this.setState({starRating: index});

  toggleLike = () => this.setState(({like}) => ({like: !like}));

  animateArtistCard = () => {
    const {fadeAnimation} = this.state;

    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  toggleFullScreenImage = () =>
    this.setState(({fullScreenImage}) => ({fullScreenImage: !fullScreenImage}));

  render() {
    const { id, poster_path, title, vote_average, vote_count, navigation} = this.props;
    const {
      validImage,
      starRating,
      fadeAnimation,
      like,
      fullScreenImage,
    } = this.state;

    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailMovie', {idMovie: id, validImage:validImage})}>
        <Animated.View style={[styles.container, {opacity: fadeAnimation}]}>
        {fullScreenImage && (
          <MovieFullScreenImage
            posterurl={poster_path}
            onPress={this.toggleFullScreenImage}
          />
        )}
        <ImageCard
          validImage={validImage}
          posterurl={poster_path}
          onError={this.invalid}
          imageOnLongPress={this.toggleFullScreenImage}
        />
        <Text style={[styles.name, styles.textColor]}>{title}</Text>
        <View style={styles.subtitle}>
          <Text style={[styles.description, styles.textColor, styles.rating]}>{formatToNumber(vote_count)}</Text>
          <Rating
            star
            starCount={5}
            starRating={starRating}
            ratingPress={this.starRatingSet}
          />
          <Text style={[styles.description, styles.textColor, styles.rating]}>
            {vote_average}
          </Text>
        </View>
        <View style={styles.heart}>
          <Rating heart like={like} ratingPress={this.toggleLike} />
        </View>
      </Animated.View>
      </TouchableOpacity>
    );
  }
}
MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}