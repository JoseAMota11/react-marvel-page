import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../../../services/character.services';
import { fetcherCharactersAction } from '../../../redux/actions/fetcher';
import { Result } from '../../../interface/characters';
import Card from '../../modules/CardCharacters/Card';
import Loading from '../../atoms/Loading/Loading';
import NoResults from '../../atoms/NoResults/NoResults';

type StateSelector = {
  data: Result[];
};

const Characters = () => {
  const [offset] = useState(0);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const selectorCharacter = useSelector(
    (state: StateSelector): Result[] => state.data
  );

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    (async function getData() {
      try {
        const {
          data: { results },
        } = await getCharacter(offset);
        dispatch(fetcherCharactersAction(results));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="center--section">
        <Loading />
      </div>
    );
  }

  return (
    <section className="section">
      <h2 className="section--title">Characters</h2>
      <div className="section--card__container">
        {selectorCharacter.length > 0 ? (
          selectorCharacter.map(({ thumbnail, name, id }) => (
            <Card key={id} id={id} thumbnail={thumbnail} name={name} />
          ))
        ) : (
          <NoResults message="characters" />
        )}
      </div>
    </section>
  );
};

export default Characters;
