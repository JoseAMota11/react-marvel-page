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
  bookmarkCharacters: CharactersResult[] | CharactersResult;
  bookmarkComics: ComicsResult[] | ComicsResult;
  bookmarkStories: StoriesResult[] | StoriesResult;
  id: number;
};

type ActionType = {
  type:
    | 'PAGINATION/TOTAL_COUNT'
    | 'PAGINATION/CURRENT_PAGE'
    | 'PAGINATION/PAGE_SIZE'
    | 'API/CHARACTERS'
    | 'API/COMICS'
    | 'API/STORIES'
    | 'BOOKMARK/ADD/CHARACTER'
    | 'BOOKMARK/ADD/COMIC'
    | 'BOOKMARK/ADD/STORY'
    | 'BOOKMARK/DELETE/CHARACTER'
    | 'BOOKMARK/DELETE/COMIC'
    | 'BOOKMARK/DELETE/STORY'
    | 'BOOKMARK/DELETE_ALL'
    | 'HIDE'
    | 'SHOW'
    | '';
  total: AppState['totalCount'];
  current: AppState['currentPage'];
  characters: AppState['characters'];
  comics: AppState['comics'];
  stories: AppState['stories'];
  bookmarkCharacters: CharactersResult;
  bookmarkComics: ComicsResult;
  bookmarkStories: StoriesResult;
  id: number;
};

const initialValue: AppState = {
  totalCount: 0,
  currentPage: 0,
  siblingCount: 1,
  pageSize: 10,
  characters: [],
  comics: [],
  stories: [],
  bookmarkCharacters: [],
  bookmarkComics: [],
  bookmarkStories: [],
  id: 0,
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
    case 'BOOKMARK/ADD/CHARACTER':
      if (Array.isArray(state.bookmarkCharacters)) {
        return {
          ...state,
          bookmarkCharacters: [
            ...state.bookmarkCharacters,
            action.bookmarkCharacters,
          ],
        };
      }
      return state.bookmarkCharacters;
    case 'BOOKMARK/ADD/COMIC':
      if (Array.isArray(state.bookmarkComics)) {
        return {
          ...state,
          bookmarkComics: [...state.bookmarkComics, action.bookmarkComics],
        };
      }
      return state.bookmarkComics;
    case 'BOOKMARK/ADD/STORY':
      if (Array.isArray(state.bookmarkStories)) {
        return {
          ...state,
          bookmarkStories: [...state.bookmarkStories, action.bookmarkStories],
        };
      }
      return state.bookmarkStories;
    case 'BOOKMARK/DELETE/CHARACTER':
      if (Array.isArray(state.bookmarkCharacters)) {
        return {
          ...state,
          bookmarkCharacters: state.bookmarkCharacters.filter(
            ({ id }) => id !== action.id
          ),
        };
      }
      return state.bookmarkCharacters;
    case 'BOOKMARK/DELETE/COMIC':
      if (Array.isArray(state.bookmarkComics)) {
        return {
          ...state,
          bookmarkComics: state.bookmarkComics.filter(
            ({ id }) => id !== action.id
          ),
        };
      }
      return state.bookmarkComics;
    case 'BOOKMARK/DELETE/STORY':
      if (Array.isArray(state.bookmarkStories)) {
        return {
          ...state,
          bookmarkStories: state.bookmarkStories.filter(
            ({ id }) => id !== action.id
          ),
        };
      }
      return state.bookmarkStories;
    default:
      return state;
  }
};

export default paginationReducer;
