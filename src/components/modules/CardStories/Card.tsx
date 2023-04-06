import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Result } from '../../../interface/stories';
import Route from '../../routes/routes';
import { IMAGE_NOT_FOUND } from '../../../helpers/constants';
import addThreeDocs from '../../../helpers/helperFuncs';
import { storiesBookmarkAction } from '../../../redux/actions/general';

const Card = ({ title, id, thumbnail, stories }: Partial<Result>) => {
  const location = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    location(`${Route.Stories}/${id}`);
  };

  const handleBookmark = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (typeof stories !== 'undefined') {
      dispatch(storiesBookmarkAction(stories));
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        className="card--image"
        src={
          thumbnail
            ? `${thumbnail.path}.${thumbnail.extension}`
            : IMAGE_NOT_FOUND
        }
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
