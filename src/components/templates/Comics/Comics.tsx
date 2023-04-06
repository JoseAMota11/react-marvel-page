import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Result } from '../../../interface/comics';
import { getComics } from '../../../services/comic.services';
import NoResults from '../../atoms/NoResults/NoResults';
import Loading from '../../atoms/Loading/Loading';
import Card from '../../modules/CardComics/Card';
import { comicsAction } from '../../../redux/actions/general';
import { AppState } from '../../../redux/reducers/general';

type StateSelector = {
  app: AppState;
};

const Comics = () => {
  const [offset] = useState(0);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const selectorCharacter = useSelector(
    (state: StateSelector): Result[] => state.app.comics
  );

  useEffect(() => {
    (async function getData() {
      try {
        const {
          data: { results },
        } = await getComics(offset);
        dispatch(comicsAction(results));
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
      <h2 className="section--title">Comics</h2>
      <div className="section--card__container">
        {selectorCharacter.length > 0 ? (
          selectorCharacter.map((comic) => (
            <Card
              key={comic.id}
              id={comic.id}
              thumbnail={comic.thumbnail}
              title={comic.title}
              comics={comic}
            />
          ))
        ) : (
          <NoResults message="comics" />
        )}
      </div>
    </section>
  );
};

export default Comics;
