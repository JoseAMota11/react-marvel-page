export interface Stories {
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
  title: string;
  description: string;
  resourceURI: string;
  type: Type;
  modified: Modified;
  thumbnail: null | Thumbnail;
  creators: Characters;
  characters: Characters;
  series: Characters;
  comics: Characters;
  events: Characters;
  originalIssue: OriginalIssue;
  stories: Result[] | Result;
  bookmarked: boolean;
}

export interface Thumbnail {
  path: string;
  extension: Extension;
}

export enum Extension {
  Jpg = 'jpg',
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
  role?: string;
}

export enum Modified {
  The19691231T1900000500 = '1969-12-31T19:00:00-0500',
  The20140127T0000000500 = '2014-01-27T00:00:00-0500',
}

export interface OriginalIssue {
  resourceURI: string;
  name: string;
}

export enum Type {
  Story = 'story',
}
