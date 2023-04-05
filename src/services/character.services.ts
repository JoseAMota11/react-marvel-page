import { LIMIT, URL } from '../helpers/constants';
import get from '../helpers/fetchInfo';
import { Characters } from '../interface/characters';
import { Comic } from '../interface/comics';
import { Stories } from '../interface/stories';

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

const options: Options = {
  limit: LIMIT,
  ts: 1,
  apikey: import.meta.env.VITE_PUBLIC_KEY,
  hash: import.meta.env.VITE_HASH,
  offset: 0,
};

export const getCharacter = async (offset: number) => {
  options.offset = offset;
  const url = `${URL}/characters`;
  const characters = await get<Characters>(url, options);
  return characters;
};

export const getCharacterByName = async (name?: string) => {
  if (name) {
    options.orderBy = 'name';
    options.nameStartsWith = name;
  } else delete options.nameStartsWith;

  const url = `${URL}/characters`;
  const characters = await get<Characters>(url, options);
  return characters;
};

export const getCharacterByComics = async (comicId: number) => {
  if (comicId !== 0) {
    options.comics = comicId;
  } else delete options.comics;

  const url = `${URL}/characters`;
  const characters = await get<Characters>(url, options);
  return characters;
};

export const getCharacterByStories = async (storiesId: number) => {
  if (storiesId !== 0) {
    options.stories = storiesId;
  } else delete options.stories;

  const url = `${URL}/characters`;
  const characters = await get<Characters>(url, options);
  return characters;
};

export const getOneCharacterById = async (characterId: number) => {
  const detailsOptions = {
    ts: 1,
    apikey: import.meta.env.VITE_PUBLIC_KEY,
    hash: import.meta.env.VITE_HASH,
  };
  const url = `${URL}/characters/${characterId}`;
  const characters = await get<Characters>(url, detailsOptions);
  return characters;
};

export const getCharacterComics = async (characterId: number) => {
  const detailsOptions = {
    ts: 1,
    apikey: import.meta.env.VITE_PUBLIC_KEY,
    hash: import.meta.env.VITE_HASH,
    limit: 3,
  };
  const url = `${URL}/characters/${characterId}/comics`;
  const characters = await get<Comic>(url, detailsOptions);
  return characters;
};

export const getCharacterStories = async (characterId: number) => {
  const detailsOptions = {
    ts: 1,
    apikey: import.meta.env.VITE_PUBLIC_KEY,
    hash: import.meta.env.VITE_HASH,
    limit: 3,
  };
  const url = `${URL}/characters/${characterId}/stories`;
  const characters = await get<Stories>(url, detailsOptions);
  return characters;
};
