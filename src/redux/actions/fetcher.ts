import { Result } from '../../interface/marvel';

const fetcherAction = (data: Result[]) => ({
  type: 'API/CHARACTER',
  payload: data,
});

export default fetcherAction;
