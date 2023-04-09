import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BookMarkIn from '../../../assets/bookmark-out.svg';
import BookMarkOut from '../../../assets/bookmark-in.svg';
import { Result } from '../../../interface/characters';
import Route from '../../routes/routes';
import addThreeDocs from '../../../helpers/helperFuncs';
import {
  characterBookmarkAction,
  characterBookmarkDeleteAction,
} from '../../../redux/actions/general';

const Card = ({ name, thumbnail, id, character }: Partial<Result>) => {
  const location = useNavigate();
  const dispatch = useDispatch();
  const [bookmarked, setBookmarked] = useState(false);
  const handleClick = () => {
    location(`${Route.Characters}/${id}`);
  };

  const handleBookmark = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (typeof character !== 'undefined' && typeof id !== 'undefined') {
      setBookmarked(true);
      if (bookmarked) {
        dispatch(characterBookmarkDeleteAction(id));
      } else dispatch(characterBookmarkAction(character));
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        className="card--image"
        src={thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : undefined}
        alt={name}
      />
      <h3 className="card--name">{addThreeDocs(name)}</h3>
      <div className="card--icons">
        <button
          className="card--button"
          type="button"
          onClick={handleBookmark}
          style={{ color: 'white' }}
        >
          {bookmarked ? (
            <img
              className="card--bookmark__out"
              src={BookMarkOut}
              alt="Bookmark"
            />
          ) : (
            <img
              className="card--bookmark__in"
              src={BookMarkIn}
              alt="Bookmark"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
