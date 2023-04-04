import { Result } from '../../interface/characters';

const fetcherCharactersAction = (data: Result[]) => ({
  type: 'API/CHARACTERS',
  payload: data,
});

export default fetcherCharactersAction;
