import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { photo as styles } from '../styles';

export default class Photo extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={this.props.source}
          style={styles.image}
          resizeMode='center'
        />
      </View>
    );
  }
};