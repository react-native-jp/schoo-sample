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

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'ホーム',
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => navigate('Camera')}
        >
          撮影画面へ
        </Text>
      </View>
    );
  }
}
