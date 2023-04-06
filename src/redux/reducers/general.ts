import { Result as CharactersResult } from '../../interface/characters';
import { Result as ComicsResult } from '../../interface/comics';
import { Result as StoriesResult } from '../../interface/stories';

export type AppState = {
  totalCount: number;
  currentPage: number;
  siblingCount: number;
  pageSize: number;
  characters: CharactersResult[];
  comics: ComicsResult[];
  stories: StoriesResult[];
};

type ActionType = {
  type:
    | 'PAGINATION/TOTAL_COUNT'
    | 'PAGINATION/CURRENT_PAGE'
    | 'PAGINATION/PAGE_SIZE'
    | 'API/CHARACTERS'
    | 'API/COMICS'
    | 'API/STORIES'
    | '';
  total: AppState['totalCount'];
  current: AppState['currentPage'];
  characters: AppState['characters'];
  comics: AppState['comics'];
  stories: AppState['stories'];
};

const initialValue: AppState = {
  totalCount: 0,
  currentPage: 0,
  siblingCount: 1,
  pageSize: 10,
  characters: [],
  comics: [],
  stories: [],
};

const paginationReducer = (state = initialValue, action: ActionType) => {
  switch (action.type) {
    case 'PAGINATION/TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.total,
      };
    case 'PAGINATION/CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.current,
      };
    case 'API/CHARACTERS':
      return {
        ...state,
        characters: action.characters,
      };
    case 'API/COMICS':
      return {
        ...state,
        comics: action.comics,
      };
    case 'API/STORIES':
      return {
        ...state,
        stories: action.stories,
      };
    default:
      return state;
  }
};

export default paginationReducer;
