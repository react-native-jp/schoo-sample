import {
  NavigationActions,
} from 'react-navigation';

export const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Home',
    })
  ]
});
