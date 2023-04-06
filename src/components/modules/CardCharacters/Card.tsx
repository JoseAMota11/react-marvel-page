import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BookMarkIn from '../../../assets/bookmark-out.svg';
import BookMarkOut from '../../../assets/bookmark-in.svg';
import { Result } from '../../../interface/characters';
import Route from '../../routes/routes';
import addThreeDocs from '../../../helpers/helperFuncs';
import { characterBookmarkAction } from '../../../redux/actions/general';

const Card = ({ name, thumbnail, id, character }: Partial<Result>) => {
  const location = useNavigate();
  const dispatch = useDispatch();
  const [bookmark, setBookmark] = useState(false);
  const handleClick = () => {
    location(`${Route.Characters}/${id}`);
  };

  const handleBookmark = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setBookmark((prevState) => !prevState);
    if (typeof character !== 'undefined') {
      dispatch(characterBookmarkAction(character));
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
          {' '}
          {bookmark ? (
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
