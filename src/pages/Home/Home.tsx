import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetcherAction from '../../redux/actions/fetcher';
import getCharacter from '../../services/character';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function getData() {
      const {
        data: { results },
      } = await getCharacter();
      dispatch(fetcherAction(results));
    })();
  }, []);

  return <div>Home</div>;
};

export default Home;
