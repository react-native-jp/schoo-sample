import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  camera as styles,
  navigation as navStyles,
} from '../styles';

export default class Camera extends React.Component {
  static navigationOptions = {
    title: '撮影',
    header: () => ({
      titleStyle: navStyles.title,
      style: navStyles.navigation,
    }),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>TODO: implementations</Text>
      </View>
    );
  }
}
