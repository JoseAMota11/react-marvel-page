import { LIMIT, HASH, PUBLIC_KEY, URL } from '../helpers/constants';
import get from '../helpers/fetchInfo';
import { Comic } from '../interface/comics';

type Options = {
  format: string;
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
  characters: number;
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

export const getComics = async (offset: number) => {
  options.offset = offset;
  const url = `${URL}/comics`;

  const comics = await get<Comic>(url, request, options);
  return comics;
};

export const getComicsByFormat = async () => {};
