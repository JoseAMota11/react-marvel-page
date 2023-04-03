import { LIMIT, HASH, PUBLIC_KEY, URL } from '../helpers/constants';
import get from '../helpers/fetchInfo';
import { Marvel } from '../interface/marvel';

const request = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

const getCharacter = async (offset: number) => {
  const options = {
    limit: LIMIT,
    ts: 1,
    apikey: PUBLIC_KEY,
    offset,
    hash: HASH,
  };

  const characters = await get<Marvel>(URL, request, options);
  return characters;
};

export default getCharacter;
