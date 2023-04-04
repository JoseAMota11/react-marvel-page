import { isNull } from 'lodash';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Result } from '../../interface/stories';
import Loading from '../../components/atoms/Loading/Loading';
import { getOneStoriesById } from '../../services/story.services';
import { IMAGE_NOT_FOUND, shortenString } from '../../helpers/constants';

const DetailPageCharacters = () => {
  const { id } = useParams();
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    (async function getOneCharacter() {
      if (id) {
        const {
          data: { results },
        } = await getOneStoriesById(parseInt(id, 10));
        setData(results);
      }
    })();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map(({ title, thumbnail, description, id: key }: Result) => (
          <div key={key} className="details">
            <Link className="details--back" to="/stories">
              Back
            </Link>
            <h3 className="details--name">{shortenString(title, 20)}</h3>
            <img
              className="details--image"
              src={
                thumbnail
                  ? `${thumbnail.path}.${thumbnail.extension}`
                  : IMAGE_NOT_FOUND
              }
              alt={title}
            />
            <div className="details--description">
              <h3>Description</h3>
              <p className="details--description__item">
                {isNull(description) || description.length <= 0
                  ? 'No description'
                  : description}
              </p>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailPageCharacters;
