export const persistPrefix = "@OSGCA:";

export function getConventionPersistKey(convention) {
    //TODO: Insert convention ID
    return persistPrefix + "[" + convention.id + "]:";
}