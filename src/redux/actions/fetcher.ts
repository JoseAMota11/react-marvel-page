import { Result } from '../../interface/marvel';

const fetcherCharactersAction = (data: Result[]) => ({
  type: 'API/CHARACTERS',
  payload: data,
});

export default fetcherCharactersAction;
