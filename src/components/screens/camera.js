import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { camera as styles } from '../styles';

export default class Camera extends React.Component {
  static navigationOptions = {
    title: '撮影',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>TODO: implementations</Text>
      </View>
    );
  }
}
