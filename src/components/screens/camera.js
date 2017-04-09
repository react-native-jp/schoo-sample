import React from 'react';
import {
  Button,
  StyleSheet,
} from 'react-native';
import Camera from 'react-native-camera';

import COLORS from '../../colorscheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.SCREEN,
  },
});

export default class extends React.Component {
  static navigationOptions = {
    title: '撮影',
  }

  state = {
    isCaptured: false,
  }

  render() {
    return (
      <Camera
        style={styles.container}
        ref={camera => {
          this.camera = camera;
        }}
        aspect={Camera.constants.Aspect.fill}
      >
        <Button
          title='撮影'
          onPress={this.takePicture}
        />
      </Camera>
    );
  }

  takePicture = async () => {
    if (this.state.isCaptured) {
      return;
    }

    this.setState({
      isCaptured: true,
    });

    const data = await this.camera.capture();

    this.props.navigation.navigate('Detail', { data });
  }
}
