import React from 'react';
import {
  Button,
  CameraRoll,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {
  makePairs,
} from '../../utils';
import {
  IMAGE_MARGIN,
  IMAGE_SIDE_LENGTH,
} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: IMAGE_SIDE_LENGTH,
    height: IMAGE_SIDE_LENGTH,
    margin: IMAGE_MARGIN / 2,
  },
});

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'ホーム',
    header: ({ navigate }) => ({
      right: (
        <Button
          title='撮影'
          onPress={() => navigate('Camera')}
        />
      )
    })
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
      <Image
        source={item.left}
        style={styles.image}
        resizeMode='center'
      />
      <Image
        source={item.right}
        style={styles.image}
        resizeMode='center'
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
