import { Result } from '../../interface/characters';
import { Result as ComicsResult } from '../../interface/comics';

export const fetcherCharactersAction = (data: Result[]) => ({
  type: 'API/CHARACTERS',
  payload: data,
});

export const fetcherComicsAction = (data: ComicsResult[]) => ({
  type: 'API/COMICS',
  payload: data,
});
