import React from 'react';
import {
  Button,
  CameraRoll,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import Photo from './Photo';

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
});

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'ホーム',
    header: ({ navigate }) => ({
      ...NAVIGATION_OPTIONS_HEADER_DEFAULT,
      right: (
        <Button
          title='撮影'
          onPress={() => navigate('Camera')}
          color={COLORS.BUTTON}
        />
      )
    }),
  }

  state = {}

  async componentDidMount() {
    const queryResult = await CameraRoll.getPhotos({
      first: 10,
    });
    const photos = queryResult.edges.map(edge => ({
      uri: edge.node.image.uri,
    }));
    const pairedPhotos = makePairs(photos);

    this.setState({ pairedPhotos });
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Photo
        account='RN Japan'
        source={item.left}
      />
      <Photo
        account='besutome'
        source={item.right}
      />
    </View>
  );

  render() {
    const { pairedPhotos } = this.state;

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
