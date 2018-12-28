export const goHome = (navigation) => {
    navigation.navigate({ routeName: "Home", key: "Home" });
}

export const goToConventionList = (navigation, conventionList, isLocalData) => {
    navigation.navigate({
        routeName: 'SelectConvention',
        params: {conventionList: conventionList, isLocalList: isLocalData},
        key: 'SelectConvention'
    });
}