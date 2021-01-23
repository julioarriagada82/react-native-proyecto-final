import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Animated, } from 'react-native';
import ImageCard from '../Common/ImageCard';
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
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default class CastingCard extends Component {
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
    const { id, original_name, profile_path, character, popularity} = this.props;
    const {
      validImage,
      fadeAnimation,
    } = this.state;

    return (
        <Animated.View style={[styles.container, {opacity: fadeAnimation}]}>
        <ImageCard
          validImage={validImage}
          posterurl={profile_path}
          onError={this.invalid}
          imageOnLongPress={this.toggleFullScreenImage}
        />
        <Text style={[styles.name, styles.textColor]}>{character}</Text>
        <View style={styles.subtitle}>
          <Text style={[styles.description, styles.textColor, styles.rating]}>{original_name}</Text>
          <Text style={[styles.description, styles.textColor, styles.rating]}>{popularity}</Text>
        </View>
      </Animated.View>
    );
  }
}
