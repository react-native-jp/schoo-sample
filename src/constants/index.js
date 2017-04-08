import {
  Dimensions,
} from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const IMAGE_MARGIN = 3;
export const IMAGE_SIDE_LENGTH = (DEVICE_WIDTH - IMAGE_MARGIN * 3) / 2;
