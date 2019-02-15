//export const baseURL = "https://osgconassist.azurewebsites.net";
export const baseURL = "http://192.168.1.90:8080"

export const getConventionListURL = baseURL + '/api/v2/conventions';
export const getProfileURL = baseURL + '/api/v2/users';

export function getConventionDataURL(convention) {
    return `${baseURL}/api/v2/convention/${convention.id}`;
}
export function getConventionFeedURL(convention) {
    return `${getConventionDataURL(convention)}/feed`;
}
export function getConventionFeedPostURL(convention) {
    return `${getConventionDataURL(convention)}/add`;
}