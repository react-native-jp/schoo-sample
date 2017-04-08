import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  COLORS,
  IMAGE_SIDE_LENGTH,
  IMAGE_MARGIN,
} from '../../constants';

const styles = StyleSheet.create({
  image: {
    width: IMAGE_SIDE_LENGTH,
    height: IMAGE_SIDE_LENGTH,
    margin: IMAGE_MARGIN / 2,
  },
  label: {
    color: COLORS.BLACK,
    textAlign: 'center',
  },
});

const Photo = ({ account, source }) => (
  <View>
    <Image
      source={source}
      style={styles.image}
      resizeMode='center'
    />
    <Text style={styles.label}>{account}</Text>
  </View>
);

export default Photo;
