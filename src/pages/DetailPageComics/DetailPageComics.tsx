import { isNull } from 'lodash';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/atoms/Loading/Loading';
import {
  getComicCharacters,
  getComicStories,
  getOneComicById,
} from '../../services/comic.services';
import { Result as CharacterResult } from '../../interface/characters';
import { Result as ComicResult } from '../../interface/comics';
import { Result as StoriesResult } from '../../interface/stories';
import CardCharacters from '../../components/modules/CardCharacters/Card';
import CardStories from '../../components/modules/CardStories/Card';

const DetailPageCharacters = () => {
  const { id: comicId } = useParams();
  const [comics, setComics] = useState<ComicResult[]>([]);
  const [characters, setCharacters] = useState<CharacterResult[]>([]);
  const [stories, setStories] = useState<StoriesResult[]>([]);

  useEffect(() => {
    (async function getOneCharacter() {
      if (comicId) {
        const {
          data: { results: comicsResult },
        } = await getOneComicById(parseInt(comicId, 10));
        const {
          data: { results: comicsCharacters },
        } = await getComicCharacters(parseInt(comicId, 10));
        const {
          data: { results: comicsStories },
        } = await getComicStories(parseInt(comicId, 10));
        setComics(comicsResult);
        setCharacters(comicsCharacters);
        setStories(comicsStories);
      }
    })();
  }, []);

  return (
    <div>
      {comics.length > 0 ? (
        comics.map(
          ({
            title: ComicsTitle,
            thumbnail: { path, extension },
            description,
            id: key,
          }: ComicResult) => (
            <div key={key} className="details">
              <Link className="details--back" to="/comics">
                Back
              </Link>
              <h3 className="details--name">{ComicsTitle}</h3>
              <img
                className="details--image"
                src={`${path}.${extension}`}
                alt={ComicsTitle}
              />
              <div className="details--description">
                <h3>Description</h3>
                <p className="details--description__item">
                  {isNull(description) || description.length <= 0
                    ? 'No description'
                    : description}
                </p>
              </div>
              <div className="details--info">
                <h3 className="details--info__title">Comics</h3>
                <div className="details--info__container">
                  {characters.length > 0 ? (
                    characters.map(({ name, id, thumbnail }) => (
                      <CardCharacters
                        key={id}
                        id={id}
                        thumbnail={thumbnail}
                        name={name}
                      />
                    ))
                  ) : (
                    <p>No characters</p>
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
