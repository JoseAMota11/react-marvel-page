import { isNull } from 'lodash';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Result } from '../../../interface/comics';
import Loading from '../../atoms/Loading/Loading';
import { getOneComicById } from '../../../services/comic';

const DetailPageCharacters = () => {
  const { id } = useParams();
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    (async function getOneCharacter() {
      if (id) {
        const {
          data: { results },
        } = await getOneComicById(parseInt(id, 10));
        setData(results);
      }
    })();
  }, []);

  return (
    <div className="center--section">
      {data.length > 0 ? (
        data.map(
          ({
            title,
            thumbnail: { path, extension },
            description,
            id: key,
          }: Result) => (
            <div key={key} className="details">
              <Link className="details--back" to="/comics">
                Back
              </Link>
              <h3 className="details--name">{title}</h3>
              <img src={`${path}.${extension}`} alt={title} />
              <div className="details--description">
                <h3>Description</h3>
                <p className="details--description__item">
                  {isNull(description) || description.length <= 0
                    ? 'No description'
                    : description}
                </p>
              </div>
            </div>
          )
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailPageCharacters;
