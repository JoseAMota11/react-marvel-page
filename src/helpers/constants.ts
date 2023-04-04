export const URL = 'https://gateway.marvel.com:443/v1/public';
export const PUBLIC_KEY = '9a820a97d00e64a08007d91ade43132f';
export const HASH = '627f15cee73ccd36cb646f2b0917050b';
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
