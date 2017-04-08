import { StyleSheet } from 'react-native';
import {
  IMAGE_MARGIN,
  IMAGE_SIDE_LENGTH,
} from '../../constants';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: IMAGE_SIDE_LENGTH,
    height: IMAGE_SIDE_LENGTH,
    margin: IMAGE_MARGIN / 3,
  },
});