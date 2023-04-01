import { createStore } from 'redux';

function counterReducer(action, state = { value: 0 }) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function App() {
  const store = createStore(counterReducer);
}

export default App;
