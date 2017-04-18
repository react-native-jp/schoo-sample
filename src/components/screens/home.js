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
  IMAGE_MARGIN,
} from '../../constants';

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
  row: {
    marginTop: IMAGE_MARGIN,
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
      key: edge.node.image.uri,
    }));

    this.setState({ photos });
  }

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity
        onPress={() => navigate('Detail', { photo: item })}
      >
        <Thumbnail
          account='RN Japan'
          source={item}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const { photos } = this.state;

    if (this.props.navigation.state.getPredicate) {
      const needsToReload = this.props.navigation.state.getPredicate();

      if (needsToReload()) {
        this.load();
      }
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={photos}
          renderItem={this.renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    );
  }
}
