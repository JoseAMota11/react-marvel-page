import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../../../services/character.services';
import { Result } from '../../../interface/characters';
import Card from '../../modules/CardCharacters/Card';
import Loading from '../../atoms/Loading/Loading';
import NoResults from '../../atoms/NoResults/NoResults';
import { AppState } from '../../../redux/reducers/general';
import { charactersAction } from '../../../redux/actions/general';

type StateSelector = {
  app: AppState;
};

const Characters = () => {
  const [offset] = useState(0);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const selectorCharacter = useSelector(
    (state: StateSelector): Result[] => state.app.characters
  );

  useEffect(() => {
    (async function getData() {
      try {
        const {
          data: { results },
        } = await getCharacter(offset);
        dispatch(charactersAction(results));
        setLoading(false);
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
