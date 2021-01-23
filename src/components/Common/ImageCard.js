import React from 'react';
import {Image, StyleSheet, TouchableHighlight} from 'react-native';
import { PATH_IMAGE_w300 } from '../../constants/variables'

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 300,
    width: '100%',
    backgroundColor: '#34495e',
  },
});

const ImageCard = ({validImage, posterurl, imageOnLongPress, onError}) => (
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

export default ImageCard;
