import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCharacter from '../../../services/character';
import fetcherAction from '../../../redux/actions/fetcher';
// import { Result } from '../../../interface/marvel';

// type StateSelector = {
//   data: Result[];
// };

const Characters = () => {
  const [offset] = useState(0);
  const dispatch = useDispatch();
  // const selectorCharacter = useSelector((state: StateSelector) => state.data);

  useEffect(() => {
    (async function getData() {
      try {
        const {
          data: { results },
        } = await getCharacter(offset);
        dispatch(fetcherAction(results));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="center--section">
      <section className="characters">
        <h2>Characters</h2>
      </section>
    </div>
  );
};

export default Characters;
