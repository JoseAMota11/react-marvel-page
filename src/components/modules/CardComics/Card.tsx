import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Result } from '../../../interface/comics';
import Route from '../../routes/routes';
import addThreeDocs from '../../../helpers/helperFuncs';
import { comicBookmarkAction } from '../../../redux/actions/general';

const Card = ({ title, id, thumbnail, comics }: Partial<Result>) => {
  const location = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    location(`${Route.Comics}/${id}`);
  };

  const handleBookmark = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (typeof comics !== 'undefined') {
      dispatch(comicBookmarkAction(comics));
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
      <button
        className="card--button"
        type="button"
        onClick={handleBookmark}
        style={{ color: 'white' }}
      >
        Bookmark
      </button>
    </div>
  );
};

export default Card;
