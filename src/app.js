import { StackNavigator } from 'react-navigation';
import Home from './components/screens/home';
import Camera from './components/screens/camera';

const App = StackNavigator({
  Home: {
    screen: Home,
  },
  Camera: {
    screen: Camera,
  },
});

export default App
