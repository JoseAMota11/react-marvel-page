export const URL = 'https://gateway.marvel.com:443/v1/public';
export const LIMIT = 10;
export const IMAGE_NOT_FOUND =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
export const shortenString = (
  stringVal: string | undefined,
  length: number
) => {
  if (typeof stringVal === 'string') {
    if (stringVal.length > length) {
      return stringVal.substring(0, length).concat('...');
    }
    return stringVal;
  }
  return undefined;
};
