import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

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
