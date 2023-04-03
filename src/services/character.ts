import { LIMIT, HASH, PUBLIC_KEY, URL } from '../helpers/constants';
import get from '../helpers/fetchInfo';
import { Marvel } from '../interface/marvel';

const request = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

export const getCharacter = async (offset: number) => {
  const options = {
    limit: LIMIT,
    ts: 1,
    apikey: PUBLIC_KEY,
    hash: HASH,
    offset,
  };

  const url = `${URL}/characters`;

  const characters = await get<Marvel>(url, request, options);
  return characters;
};

export const getCharacterByName = async (offset: number, name: string) => {
  const options = {
    limit: LIMIT,
    ts: 1,
    apikey: PUBLIC_KEY,
    hash: HASH,
    offset,
    name,
  };

  const url = `${URL}/characters`;
  const characters = await get<Marvel>(url, request, options);
  return characters;
};
