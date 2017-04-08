import { StyleSheet } from 'react-native';
import {
  IMAGE_MARGIN,
  IMAGE_SIDE_LENGTH,
} from '../../constants';
import colors from './colors';

export default StyleSheet.create({
  label: {
    textAlign: 'center',
    color: colors.black,
    textAlign: 'center',
  },
  image: {
    width: IMAGE_SIDE_LENGTH,
    height: IMAGE_SIDE_LENGTH,
    margin: IMAGE_MARGIN / 2,
  },
});