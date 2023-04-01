import { LIMIT, HASH, PUBLIC_KEY, URL } from '../helpers/constants';
import get from '../helpers/fetchInfo';
import { Marvel } from '../interface/marvel';

const request = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

const options = {
  limit: LIMIT,
  ts: 1,
  apikey: PUBLIC_KEY,
  hash: HASH,
};

const getCharacter = async () => {
  const characters = await get<Marvel>(URL, request, options);
  return characters;
};

export default getCharacter;
