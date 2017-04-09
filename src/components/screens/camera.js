import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

import COLORS from '../../colorscheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.SCREEN,
  },
  shutter: {
    backgroundColor: 'transparent',
    marginBottom: 32,
  },
});

export default class extends React.Component {
  static navigationOptions = {
    header: {
      visible: false,
    },
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
        <TouchableOpacity
          onPress={this.takePicture}
          style={styles.shutter}
        >
          <Icon
            name='camera'
            size={64}
            color={COLORS.SHUTTER}
          />
        </TouchableOpacity>
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
