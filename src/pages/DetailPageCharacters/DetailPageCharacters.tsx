import { isNull } from 'lodash';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  getCharacterComics,
  getCharacterStories,
  getOneCharacterById,
} from '../../services/character.services';
import { Result as CharacterResult } from '../../interface/characters';
import { Result as ComicResult } from '../../interface/comics';
import { Result as StoriesResult } from '../../interface/stories';
import Loading from '../../components/atoms/Loading/Loading';
import CardComics from '../../components/modules/CardComics/Card';
import CardStories from '../../components/modules/CardStories/Card';

const DetailPageCharacters = () => {
  const { id: characterId } = useParams();
  const [characters, setCharacters] = useState<CharacterResult[]>([]);
  const [comics, setComics] = useState<ComicResult[]>([]);
  const [stories, setStories] = useState<StoriesResult[]>([]);

  useEffect(() => {
    (async function getOneCharacter() {
      if (characterId) {
        const {
          data: { results: singleCharacter },
        } = await getOneCharacterById(parseInt(characterId, 10));
        const {
          data: { results: characterComics },
        } = await getCharacterComics(parseInt(characterId, 10));
        const {
          data: { results: characterStories },
        } = await getCharacterStories(parseInt(characterId, 10));
        setCharacters(singleCharacter);
        setComics(characterComics);
        setStories(characterStories);
      }
    })();
  }, []);

  return (
    <div>
      {characters.length > 0 ? (
        characters.map(
          ({
            name,
            thumbnail: { path, extension },
            description,
            id: key,
          }: CharacterResult) => (
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
              <div className="details--info">
                <h3 className="details--info__title">Comics</h3>
                <div className="details--info__container">
                  {comics.length > 0 ? (
                    comics.map(({ title, id, thumbnail }) => (
                      <CardComics
                        key={id}
                        id={id}
                        thumbnail={thumbnail}
                        title={title}
                      />
                    ))
                  ) : (
                    <p>No comics</p>
                  )}
                </div>
                <h3 className="details--info__title">Stories</h3>
                <div className="details--info__container">
                  {stories.length > 0 ? (
                    stories.map(({ title, id, thumbnail }) => (
                      <CardStories
                        key={id}
                        id={id}
                        thumbnail={isNull(thumbnail) ? null : thumbnail}
                        title={title}
                      />
                    ))
                  ) : (
                    <p>No stories</p>
                  )}
                </div>
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
