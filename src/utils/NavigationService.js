import { NavigationActions } from 'react-navigation';

var navigator;

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

function getNavigator() {
  return navigator;
}

export default {
  navigate,
  setTopLevelNavigator,
  isReady,
  getNavigator
};