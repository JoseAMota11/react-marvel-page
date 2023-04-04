import { LIMIT, HASH, PUBLIC_KEY, URL } from '../helpers/constants';
import get from '../helpers/fetchInfo';
import { Marvel } from '../interface/characters';

type Options = {
  limit: number;
  ts: number;
  apikey: string;
  hash: string;
  offset?: number;
  nameStartsWith?: string;
  comics?: number;
  stories?: number;
  orderBy?: 'name' | 'modified' | '-name' | '-modified';
};

const request = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

const options: Options = {
  limit: LIMIT,
  ts: 1,
  apikey: PUBLIC_KEY,
  hash: HASH,
  offset: 0,
};

export const getCharacter = async (offset: number) => {
  options.offset = offset;
  const url = `${URL}/characters`;
  const characters = await get<Marvel>(url, request, options);
  return characters;
};

export const getCharacterByName = async (name?: string) => {
  if (name) {
    options.orderBy = 'name';
    options.nameStartsWith = name;
  } else delete options.nameStartsWith;

  const url = `${URL}/characters`;
  const characters = await get<Marvel>(url, request, options);
  return characters;
};

export const getCharacterByComics = async (comicId: number) => {
  if (comicId !== 0) {
    options.comics = comicId;
  } else delete options.comics;

  const url = `${URL}/characters`;
  const characters = await get<Marvel>(url, request, options);
  return characters;
};

export const getCharacterByStories = async (storiesId: number) => {
  if (storiesId !== 0) {
    options.stories = storiesId;
  } else delete options.stories;

  const url = `${URL}/characters`;
  const characters = await get<Marvel>(url, request, options);
  return characters;
};

export const getOneCharacterById = async (characterId: number) => {
  const detailsOptions = {
    ts: 1,
    apikey: PUBLIC_KEY,
    hash: HASH,
  };
  const url = `${URL}/characters/${characterId}`;
  const characters = await get<Marvel>(url, request, detailsOptions);
  return characters;
};
