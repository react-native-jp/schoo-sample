import React, { PropTypes } from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';
import { photo as styles } from '../styles';

const Photo = ({ account, source }) => (
  <View>
    <Image
      source={source}
      style={styles.image}
      resizeMode='center'
    />
    <Text
      style={styles.label}
    >
      {account}
    </Text>
  </View>
);

Photo.propTypes = {
  account: PropTypes.string,
  source: PropTypes.object.isRequired,
};

export default Photo;