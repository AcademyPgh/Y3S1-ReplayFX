import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function isReady() {
    if (navigator) {
        return true;
    }
    return false;
}

export default {
  navigate,
  setTopLevelNavigator,
  isReady
};