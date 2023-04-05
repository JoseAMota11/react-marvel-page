import { isNull } from 'lodash';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/atoms/Loading/Loading';
import {
  getOneStoriesById,
  getStoriesCharacters,
  getStoriesComics,
} from '../../services/story.services';
import { IMAGE_NOT_FOUND } from '../../helpers/constants';
import addThreeDocs from '../../helpers/helperFuncs';
import { Result as CharacterResult } from '../../interface/characters';
import { Result as ComicResult } from '../../interface/comics';
import { Result as StoriesResult } from '../../interface/stories';
import CardCharacters from '../../components/modules/CardCharacters/Card';
import CardComics from '../../components/modules/CardComics/Card';

const DetailPageCharacters = () => {
  const { id: storiesId } = useParams();
  const [stories, setStories] = useState<StoriesResult[]>([]);
  const [characters, setCharacters] = useState<CharacterResult[]>([]);
  const [comics, setComics] = useState<ComicResult[]>([]);

  useEffect(() => {
    (async function getOneCharacter() {
      if (storiesId) {
        const {
          data: { results: storiesResult },
        } = await getOneStoriesById(parseInt(storiesId, 10));
        const {
          data: { results: storiesCharacters },
        } = await getStoriesCharacters(parseInt(storiesId, 10));
        const {
          data: { results: storiesComics },
        } = await getStoriesComics(parseInt(storiesId, 10));
        setStories(storiesResult);
        setCharacters(storiesCharacters);
        setComics(storiesComics);
      }
    })();
  }, []);

  return (
    <div>
      {stories.length > 0 ? (
        stories.map(
          ({
            title: comicTitle,
            thumbnail: comicThumbnail,
            description,
            id: key,
          }: StoriesResult) => (
            <div key={key} className="details">
              <Link className="details--back" to="/stories">
                Back
              </Link>
              <h3 className="details--name">{addThreeDocs(comicTitle)}</h3>
              <img
                className="details--image"
                src={
                  comicThumbnail
                    ? `${comicThumbnail.path}.${comicThumbnail.extension}`
                    : IMAGE_NOT_FOUND
                }
                alt={comicTitle}
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
