import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  navigation: {
    backgroundColor: colors.lightGray,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.8
  },
  title: {
    fontWeight: '300',
    color: colors.black,
  },
});
