type ActionType = {
  type: 'INCREMENT' | 'DECREMENT';
  payload: 2;
};

const counterReducer = (state = 0, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
