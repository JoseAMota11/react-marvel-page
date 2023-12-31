import { LIMIT, URL } from '../helpers/constants';
import get from '../helpers/fetchInfo';
import { Characters } from '../interface/characters';
import { Stories } from '../interface/stories';
import { Comic } from '../interface/comics';

type Options = {
  format:
    | 'comic'
    | 'magazine'
    | 'trade paperback'
    | 'hardcover'
    | 'digest'
    | 'graphic novel'
    | 'digital comic'
    | 'infinite comic'
    | string;
  formatType: string;
  noVariants: boolean;
  dateDescriptor: string;
  dateRange: number;
  title: string;
  titleStartsWith: string;
  startYear: number;
  issueNumber: number;
  diamondCode: string;
  digitalId: number;
  upc: string;
  isbn: string;
  ean: string;
  issn: string;
  hasDigitalIssue: boolean;
  modifiedSince: Date;
  creators: number;
  comics: number;
  events: number;
  sharedAppearances: number;
  collaborators: number;
  series: number;
  limit: number;
  ts: number;
  apikey: string;
  hash: string;
  offset?: number;
  stories?: number;
  orderBy?:
    | 'focDate'
    | 'onsaleDate'
    | 'title'
    | 'issueNumber'
    | 'modified'
    | '-focDate'
    | '-onsaleDate'
    | '-title'
    | '-issueNumber'
    | '-modified';
};

const options: Partial<Options> = {
  limit: LIMIT,
  ts: 1,
  apikey: import.meta.env.VITE_PUBLIC_KEY,
  hash: import.meta.env.VITE_HASH,
};

export const getComics = async (offset: number) => {
  options.offset = offset;
  const url = `${URL}/comics`;

  const comics = await get<Comic>(url, options);
  return comics;
};

export const getComicsByFormat = async (format: string) => {
  if (format.length > 0) {
    options.format = format;
  } else delete options.format;
  const url = `${URL}/comics`;

  const comics = await get<Comic>(url, options);
  return comics;
};

export const getComicsByTitle = async (titleStartsWith: string) => {
  if (titleStartsWith.length > 0) {
    options.titleStartsWith = titleStartsWith;
  } else delete options.titleStartsWith;
  const url = `${URL}/comics`;

  const comics = await get<Comic>(url, options);
  return comics;
};

export const getOneComicById = async (comic: number) => {
  const detailsOptions = {
    ts: 1,
    apikey: import.meta.env.VITE_PUBLIC_KEY,
    hash: import.meta.env.VITE_HASH,
  };

  const url = `${URL}/comics/${comic}`;
  const comics = await get<Comic>(url, detailsOptions);
  return comics;
};

export const getComicCharacters = async (comic: number) => {
  const detailsOptions = {
    ts: 1,
    apikey: import.meta.env.VITE_PUBLIC_KEY,
    hash: import.meta.env.VITE_HASH,
  };

  const url = `${URL}/comics/${comic}/characters`;
  const comics = await get<Characters>(url, detailsOptions);
  return comics;
};

export const getComicStories = async (comic: number) => {
  const detailsOptions = {
    ts: 1,
    apikey: import.meta.env.VITE_PUBLIC_KEY,
    hash: import.meta.env.VITE_HASH,
  };

  const url = `${URL}/comics/${comic}/stories`;
  const comics = await get<Stories>(url, detailsOptions);
  return comics;
};
