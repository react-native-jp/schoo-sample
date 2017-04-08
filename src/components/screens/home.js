import React from 'react';
import {
  Button,
  CameraRoll,
  FlatList,
  View,
} from 'react-native';
import Photo from './Photo';
import {
  makePairs,
} from '../../utils';
import {
  home as styles,
  navigation as navStyles,
  colors,
} from '../styles';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'ホーム',
    header: ({ navigate }) => ({
      titleStyle: navStyles.title,
      style: navStyles.navigation,
      right: (
        <Button
          title='撮影'
          onPress={() => navigate('Camera')}
          color={colors.black}
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
