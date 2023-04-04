import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneCharacterById } from '../../services/character.services';
import { Result } from '../../interface/characters';
import Loading from '../../components/atoms/Loading/Loading';

const DetailPageCharacters = () => {
  const { id } = useParams();
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    (async function getOneCharacter() {
      if (id) {
        const {
          data: { results },
        } = await getOneCharacterById(parseInt(id, 10));
        setData(results);
      }
    })();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map(
          ({
            name,
            thumbnail: { path, extension },
            description,
            id: key,
          }: Result) => (
            <div key={key} className="details">
              <Link className="details--back" to="/characters">
                Back
              </Link>
              <h3 className="details--name">{name}</h3>
              <img
                className="details--image"
                src={`${path}.${extension}`}
                alt={name}
              />
              <div className="details--description">
                <h3>Description</h3>
                <p className="details--description__item">
                  {description.length <= 0 ? 'No description' : description}
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
