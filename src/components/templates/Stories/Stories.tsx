import { isNull } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../atoms/Loading/Loading';
import NoResults from '../../atoms/NoResults/NoResults';
import Card from '../../modules/CardStories/Card';
import { Result } from '../../../interface/stories';
import { getStories } from '../../../services/story.services';
import { fetcherStoriesAction } from '../../../redux/actions/fetcher';

type StateSelector = {
  data: Result[];
};

const Stories = () => {
  const [offset] = useState(0);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const selectorCharacter = useSelector(
    (state: StateSelector): Result[] => state.data
  );

  useEffect(() => {
    (async function getData() {
      try {
        const {
          data: { results },
        } = await getStories(offset);
        dispatch(fetcherStoriesAction(results));
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
          selectorCharacter.map(({ thumbnail, title, id }) => (
            <Card
              key={id}
              id={id}
              thumbnail={isNull(thumbnail) ? null : thumbnail}
              title={title}
            />
          ))
        ) : (
          <NoResults message="comics" />
        )}
      </div>
    </section>
  );
};

export default Stories;
