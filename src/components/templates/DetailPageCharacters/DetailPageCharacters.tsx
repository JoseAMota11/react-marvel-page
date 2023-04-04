import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneCharacterById } from '../../../services/character';
import { Result } from '../../../interface/characters';
import Loading from '../../atoms/Loading/Loading';

const DetailPageCharacters = () => {
  const { id } = useParams();
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    (async function getOneCharacter() {
      if (id) {
        const {
          data: { results },
        } = await getOneCharacterById(parseInt(id));
        setData(results);
      }
    })();
  }, []);

  return (
    <div className="center--section">
      <div className="details">
        <Link className="details--back" to={'/characters'}>
          Back
        </Link>
        {data.length > 0 ? (
          data.map(
            ({ name, thumbnail: { path, extension }, description }: Result) => (
              <>
                <h3 className="details--name">{name}</h3>
                <img src={`${path}.${extension}`} alt={name} />
                <div className="details--description">
                  <h3>Description</h3>
                  <p className="details--description__item">
                    {description.length <= 0 ? 'No description' : description}
                  </p>
                </div>
              </>
            )
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default DetailPageCharacters;
