import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  resetAction,
} from '../../utils/screen';
import {
  DEVICE_WIDTH,
} from '../../constants';
import {
  NAVIGATION_OPTIONS_HEADER_DEFAULT,
} from '../../app';
import COLORS from '../../colorscheme';

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
    marginLeft: 8,
  },
});

export default class Detail extends React.Component {
  static navigationOptions = {
    title: '写真',
    header: ({ dispatch }) => ({
      ...NAVIGATION_OPTIONS_HEADER_DEFAULT,
      left: (
        <TouchableOpacity
          onPress={() => dispatch(resetAction)}
          style={styles.button}
        >
          <Icon
            name='home'
            size={24}
            color={COLORS.BUTTON}
          />
        </TouchableOpacity>
      ),
    }),
  }

  render() {
    const { data } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={styles.preview}>
          <Image
            source={{ uri: data.path }}
            style={styles.image}
          />
        </View>
      </View>
    );
  }
}
