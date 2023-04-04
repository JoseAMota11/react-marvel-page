import { Result } from '../../interface/characters';

type ActionType = {
  type: 'API/CHARACTERS' | 'API/COMICS' | '';
  payload: Result | [];
};

type StateType = [];

const fetcherReducer = (state: StateType, action: ActionType) => {
  if (typeof state === 'undefined') state = [];

  switch (action.type) {
    case 'API/CHARACTERS':
      return action.payload;
    case 'API/COMICS':
      return action.payload;
    default:
      return state;
  }
};

export default fetcherReducer;
