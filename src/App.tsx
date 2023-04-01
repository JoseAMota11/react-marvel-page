import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

type StateSelector = {
  counter: number;
};

const App = () => {
  const counter = useSelector((state: StateSelector) => state.counter);
  const dispatch = useDispatch();
  const [byTwo] = useState(2);
  return (
    <div>
      <p>Counter by two: {counter}</p>
      <button type="button" onClick={() => dispatch(decrement(byTwo))}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch(increment(byTwo))}>
        Increment
      </button>
    </div>
  );
};

export default App;
