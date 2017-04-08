import {
  StackNavigator,
} from 'react-navigation';
import {
  StyleSheet,
} from 'react-native';
import Home from './components/screens/home';
import Camera from './components/screens/camera';

import {
  COLORS,
} from './constants';

const routes = {
  Home: {
    screen: Home,
  },
  Camera: {
    screen: Camera,
  },
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.LIGHTGRAY,
    shadowColor: COLORS.GRAY,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.8
  },
  headerTitle: {
    fontWeight: '300',
    color: COLORS.BLACK,
  },
});

const NAVIGATION_OPTIONS_HEADER_DEFAULT = {
  style: styles.header,
  titleStyle: styles.headerTitle,
};

Object.freeze(NAVIGATION_OPTIONS_HEADER_DEFAULT)

export { NAVIGATION_OPTIONS_HEADER_DEFAULT };

const options = {
  navigationOptions: {
    header: NAVIGATION_OPTIONS_HEADER_DEFAULT,
  },
};

export default StackNavigator(routes, options);
