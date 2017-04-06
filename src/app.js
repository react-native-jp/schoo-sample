import { StackNavigator } from 'react-navigation';
import Home from './components/screens/home';
import Camera from './components/screens/camera';

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Camera: {
    screen: Camera,
  },
});
