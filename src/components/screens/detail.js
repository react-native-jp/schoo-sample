import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {
  resetAction,
} from '../../utils/screen';
import {
  DEVICE_WIDTH,
} from '../../constants';
import {
  NAVIGATION_OPTIONS_HEADER_DEFAULT,
} from '../../app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  image: {
    flex: 1,
    width: DEVICE_WIDTH - 64,
    height: null,
  },
  button: {
    height: 32,
  },
});

export default class Detail extends React.Component {
  static navigationOptions = {
    title: '写真',
    header: () => ({
      ...NAVIGATION_OPTIONS_HEADER_DEFAULT,
      left: <View />,
    }),
  }

  render() {
    const {
      state: {
        params
      },
      dispatch,
    } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.preview}>
          <Image
            source={{ uri: params.data.mediaUri }}
            style={styles.image}
          />
        </View>
        <Button
          title='戻る'
          onPress={() => dispatch(resetAction)}
          style={styles.button}
        />
      </View>
    );
  }
}
