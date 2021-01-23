import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../../config/colors'
import { PATH_IMAGE_w300 } from '../../constants/variables'

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 300,
    width: '100%',
    backgroundColor: colors.blue_dark,
  },
});

const MovieImage = ({validImage, posterurl, imageOnLongPress, onError}) => (
  <TouchableHighlight
    onLongPress={imageOnLongPress}
    underlayColor="transparent"
    disabled={!validImage}>
    <Image
      style={styles.image}
      source={
        validImage
          ? {uri: `${PATH_IMAGE_w300}${posterurl}`}
          : require('../../assets/no_image_available.jpg')
      }
      resizeMode="cover"
      onError={onError}
    />
  </TouchableHighlight>
);

MovieImage.propTypes = {
  validImage: PropTypes.bool,
  posterurl: PropTypes.string,
  imageOnLongPress: PropTypes.func,
  onError: PropTypes.func,
}

export default MovieImage;
