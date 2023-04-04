import { Result } from '../../interface/characters';
import { Result as ComicsResult } from '../../interface/comics';
import { Result as StoriesResult } from '../../interface/stories';

export const fetcherCharactersAction = (data: Result[]) => ({
  type: 'API/CHARACTERS',
  payload: data,
});

export const fetcherComicsAction = (data: ComicsResult[]) => ({
  type: 'API/COMICS',
  payload: data,
});

export const fetcherStoriesAction = (data: StoriesResult[]) => ({
  type: 'API/STORIES',
  payload: data,
});
