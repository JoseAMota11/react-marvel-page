import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BookMarkIn from '../../../assets/bookmark-out.svg';
import BookMarkOut from '../../../assets/bookmark-in.svg';
import { Result } from '../../../interface/comics';
import Route from '../../routes/routes';
import addThreeDocs from '../../../helpers/helperFuncs';
import {
  comicBookmarkAction,
  comicBookmarkDeleteAction,
} from '../../../redux/actions/general';

const Card = ({ title, id, thumbnail, comics }: Partial<Result>) => {
  const location = useNavigate();
  const dispatch = useDispatch();
  const [bookmark, setBookmark] = useState(false);
  const handleClick = () => {
    location(`${Route.Comics}/${id}`);
  };

  const handleBookmark = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setBookmark((prevState) => !prevState);
    if (typeof comics !== 'undefined' && typeof id !== 'undefined') {
      if (bookmark) {
        dispatch(comicBookmarkDeleteAction(id));
      } else dispatch(comicBookmarkAction(comics));
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        className="card--image"
        src={thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : undefined}
        alt={title}
      />
      <h3 className="card--name">{addThreeDocs(title)}</h3>
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
