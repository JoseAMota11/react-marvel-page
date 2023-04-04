import { LIMIT, HASH, PUBLIC_KEY, URL } from '../helpers/constants';
import get from '../helpers/fetchInfo';
import { Marvel } from '../interface/marvel';

type Options = {
  limit: number;
  ts: number;
  apikey: string;
  hash: string;
  offset: number;
  nameStartsWith?: string;
  comics?: number;
};

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

export const getCharacterByName = async (offset: number, name?: string) => {
  const options: Options = {
    limit: LIMIT,
    ts: 1,
    apikey: PUBLIC_KEY,
    hash: HASH,
    offset,
  };

  if (name) {
    options.nameStartsWith = name;
  }

  const url = `${URL}/characters`;
  const characters = await get<Marvel>(url, request, options);
  return characters;
};

export const getCharacterByComics = async (offset: number, comicId: number) => {
  const options: Options = {
    limit: LIMIT,
    ts: 1,
    apikey: PUBLIC_KEY,
    hash: HASH,
    offset,
  };

  if (comicId !== 0) {
    options.comics = comicId;
  }

  const url = `${URL}/characters`;
  const characters = await get<Marvel>(url, request, options);
  return characters;
};
