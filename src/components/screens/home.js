import React from 'react';
import {
  Button,
  CameraRoll,
  FlatList,
  Image,
  View,
} from 'react-native';
import {
  makePairs,
} from '../../utils';
import { home as styles } from '../styles';

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
