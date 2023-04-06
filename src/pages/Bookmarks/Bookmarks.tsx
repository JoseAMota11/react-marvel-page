import { isNull } from 'lodash';
import { useSelector } from 'react-redux';
import { Result as CharacterResult } from '../../interface/characters';
import { Result as ComicsResult } from '../../interface/comics';
import { Result as StoriesResult } from '../../interface/stories';
import CardCharacter from '../../components/modules/CardCharacters/Card';
import CardComics from '../../components/modules/CardComics/Card';
import CardStories from '../../components/modules/CardStories/Card';
import NoResults from '../../components/atoms/NoResults/NoResults';

type CharacterState = {
  app: {
    bookmarkCharacters: CharacterResult[];
  };
};

type ComicsState = {
  app: {
    bookmarkComics: ComicsResult[];
  };
};

type StoriesState = {
  app: {
    bookmarkStories: StoriesResult[];
  };
};

const Bookmarks = () => {
  const characterSelector = useSelector(
    (state: CharacterState) => state.app.bookmarkCharacters
  );
  const comicSelector = useSelector(
    (state: ComicsState) => state.app.bookmarkComics
  );
  const storySelector = useSelector(
    (state: StoriesState) => state.app.bookmarkStories
  );

  return (
    <div className="bookmark">
      <div className="bookmark--characters">
        <h3>Characters</h3>
        <div className="bookmark--characters__container">
          {characterSelector.length > 0 ? (
            characterSelector.map((character) => (
              <CardCharacter
                key={character.id}
                id={character.id}
                thumbnail={character.thumbnail}
                name={character.name}
                character={character}
              />
            ))
          ) : (
            <NoResults message="characters" />
          )}
        </div>
      </div>
      <div className="bookmark--comics">
        <h3>Comics</h3>
        <div className="bookmark--comics__container">
          {comicSelector.length > 0 ? (
            comicSelector.map((comic) => (
              <CardComics
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
      </div>
      <div className="bookmark--stories">
        <h3>Comics</h3>
        <div className="bookmark--stories__container">
          {storySelector.length > 0 ? (
            storySelector.map((stories) => (
              <CardStories
                key={stories.id}
                id={stories.id}
                thumbnail={isNull(stories.thumbnail) ? null : stories.thumbnail}
                title={stories.title}
                stories={stories}
              />
            ))
          ) : (
            <NoResults message="stories" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
