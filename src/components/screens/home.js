import React from 'react';
import {
  CameraRoll,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Thumbnail from '../thumbnail';

import COLORS from '../../colorscheme';

import {
  makePairs,
} from '../../utils';

import {
  NAVIGATION_OPTIONS_HEADER_DEFAULT,
} from '../../app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.SCREEN,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginRight: 8,
  },
});

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'ホーム',
    header: ({ navigate }) => ({
      ...NAVIGATION_OPTIONS_HEADER_DEFAULT,
      right: (
        <TouchableOpacity
          onPress={() => navigate('Camera')}
          style={styles.button}
        >
          <Icon
            name='camera'
            size={24}
            color={COLORS.BUTTON}
        />
        </TouchableOpacity>
      )
    }),
  }

  state = {}

  componentDidMount() {
    this.load();
  }

  load = async () => {
    const queryResult = await CameraRoll.getPhotos({
      first: 10,
    });
    const photos = queryResult.edges.map(edge => ({
      uri: edge.node.image.uri,
    }));
    const pairedPhotos = makePairs(photos);

    this.setState({ pairedPhotos });
  }

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => navigate('Detail', { photo: item.left })}
        >
          <Thumbnail
            account='RN Japan'
            source={item.left}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Detail', { photo: item.right })}
        >
          <Thumbnail
            account='besutome'
            source={item.right}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { pairedPhotos } = this.state;

    if (this.props.navigation.state.getPredicate) {
      const needsToReload = this.props.navigation.state.getPredicate();

      if (needsToReload()) {
        this.load();
      }
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={pairedPhotos}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
