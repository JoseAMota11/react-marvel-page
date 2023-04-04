import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Result } from '../../../interface/comics';
import { getComics } from '../../../services/comic';
import { fetcherComicsAction } from '../../../redux/actions/fetcher';
import NoResults from '../../atoms/NoResults/NoResults';
import Loading from '../../atoms/Loading/Loading';
import Card from '../../modules/CardComics/Card';

type StateSelector = {
  data: Result[];
};

const Comics = () => {
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
        } = await getComics(offset);
        dispatch(fetcherComicsAction(results));
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
    <div className="center--section">
      <section className="characters">
        <h2 className="characters--title">Comics</h2>
        <div className="characters--card__container">
          {selectorCharacter.length > 0 ? (
            selectorCharacter.map(({ thumbnail, title, id }) => (
              <Card key={id} id={id} thumbnail={thumbnail} title={title} />
            ))
          ) : (
            <NoResults message="characters" />
          )}
        </div>
      </section>
    </div>
  );
};

export default Comics;
