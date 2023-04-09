export interface Comic {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

export interface Result {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: null | string;
  modified: string;
  isbn: Isbn;
  upc: string;
  diamondCode: DiamondCode;
  ean: string;
  issn: string;
  format: Format;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: Series[];
  collections: any[];
  collectedIssues: any[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Characters;
  comics: Result[] | Result;
  bookmarked: boolean;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
}

export interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: string;
}

export interface DateElement {
  type: DateType;
  date: string;
}

export enum DateType {
  DigitalPurchaseDate = 'digitalPurchaseDate',
  FocDate = 'focDate',
  OnsaleDate = 'onsaleDate',
  UnlimitedDate = 'unlimitedDate',
}

export enum DiamondCode {
  Empty = '',
  Jul190068 = 'JUL190068',
}

export enum Format {
  Comic = 'Comic',
  Empty = '',
  TradePaperback = 'Trade Paperback',
}

export interface Thumbnail {
  path: string;
  extension: Extension;
}

export enum Extension {
  Jpg = 'jpg',
}

export enum Isbn {
  Empty = '',
  The0785107991 = '0-7851-0799-1',
}

export interface Price {
  type: PriceType;
  price: number;
}

export enum PriceType {
  DigitalPurchasePrice = 'digitalPurchasePrice',
  PrintPrice = 'printPrice',
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

export enum ItemType {
  Cover = 'cover',
  InteriorStory = 'interiorStory',
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface URL {
  type: string;
  url: string;
}
