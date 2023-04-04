import { LIMIT, HASH, PUBLIC_KEY, URL } from '../helpers/constants';
import get from '../helpers/fetchInfo';
import { Stories } from '../interface/stories';

type Options = {
  modifiedSince: Date;
  comics: number;
  series: number;
  events: number;
  creators: number;
  characters: number;
  limit: number;
  ts: number;
  apikey: string;
  hash: string;
  offset?: number;
  orderBy?: 'id' | 'modified' | '-id' | '-modified';
};

const request = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

const options: Partial<Options> = {
  limit: LIMIT,
  ts: 1,
  apikey: PUBLIC_KEY,
  hash: HASH,
};

export const getStories = async (offset: number) => {
  options.offset = offset;
  const url = `${URL}/stories`;

  const stories = await get<Stories>(url, request, options);
  return stories;
};

export const getStoriesByCharacters = async (charactersId: number) => {
  if (charactersId > 0) {
    options.characters = charactersId;
  } else delete options.characters;
  const url = `${URL}/stories`;

  const comics = await get<Stories>(url, request, options);
  return comics;
};

export const getOneStoriesById = async (stories: number) => {
  const detailsOptions = {
    ts: 1,
    apikey: PUBLIC_KEY,
    hash: HASH,
  };

  const url = `${URL}/stories/${stories}`;
  const comics = await get<Stories>(url, request, detailsOptions);
  return comics;
};
