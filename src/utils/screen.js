import {
  NavigationActions,
} from 'react-navigation';

export const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Home',
      getPredicate: () => {
        let remain = 1;

        return () => 0 <= remain--;
      },
    }),
  ]
});
