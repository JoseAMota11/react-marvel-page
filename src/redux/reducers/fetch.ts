import { Result } from '../../interface/marvel';

type ActionType = {
  type: 'API/CHARACTER' | '';
  payload: Result | [];
};

type StateType = [];

const fetcherReducer = (state: StateType, action: ActionType) => {
  if (typeof state === 'undefined') state = [];

  switch (action.type) {
    case 'API/CHARACTER':
      return action.payload;
    default:
      return state;
  }
};

export default fetcherReducer;
