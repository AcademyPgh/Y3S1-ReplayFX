import { NavigationActions } from 'react-navigation';

export const goHome = (navigation) => {
    navigation.navigate({ routeName: "Home", key: "Home" });
}

export const goToConventionList = (navigation, conventionList, isLocalList) => {

    let navParams = {
        routeName: 'SelectConvention',
        key: 'SelectConvention',
    };

    if (conventionList) {
        navParams.params = {conventionList, isLocalList};
    }

    const navigateAction = NavigationActions.navigate(navParams);

    navigation.dispatch(navigateAction);
}