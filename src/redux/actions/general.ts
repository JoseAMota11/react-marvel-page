import { AppState } from '../reducers/general';

export const totalCountAction = (totalCount: AppState['totalCount']) => ({
  type: 'PAGINATION/TOTAL_COUNT',
  total: totalCount,
});

export const currentPageAction = (currentPage: AppState['currentPage']) => ({
  type: 'PAGINATION/CURRENT_PAGE',
  current: currentPage,
});

export const charactersAction = (data: AppState['characters']) => ({
  type: 'API/CHARACTERS',
  characters: data,
});

export const comicsAction = (data: AppState['comics']) => ({
  type: 'API/COMICS',
  comics: data,
});

export const storiesAction = (data: AppState['stories']) => ({
  type: 'API/STORIES',
  stories: data,
});

export const characterBookmarkAction = (
  data: AppState['bookmarkCharacters']
) => ({
  type: 'BOOKMARK/ADD/CHARACTER',
  bookmarkCharacters: data,
});

export const comicBookmarkAction = (data: AppState['bookmarkComics']) => ({
  type: 'BOOKMARK/ADD/COMIC',
  bookmarkComics: data,
});

export const storiesBookmarkAction = (data: AppState['bookmarkStories']) => ({
  type: 'BOOKMARK/ADD/STORY',
  bookmarkStories: data,
});
