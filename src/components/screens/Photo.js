import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { photo as styles } from '../styles';

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
