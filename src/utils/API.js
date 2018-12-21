export const baseURL = "https://osgconassist.azurewebsites.net";

export const getConventionListURL = baseURL + '/api/v2/conventions';

export function getConventionDataURL(convention) {
    return `${baseURL}/api/v2/convention/${convention.Id}`;
}