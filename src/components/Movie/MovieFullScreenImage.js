import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import colors from '../../config/colors'
import { PATH_IMAGE_w500 } from '../../constants/variables'

const styles = StyleSheet.create({
  touchable: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const MovieFullScreenImage = ({posterurl, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{uri: `${PATH_IMAGE_w500}${posterurl}`}}
      />
    </TouchableOpacity>
  );
};

MovieFullScreenImage.propTypes = {
  posterurl: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default MovieFullScreenImage;
