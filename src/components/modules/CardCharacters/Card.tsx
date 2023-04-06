import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Result } from '../../../interface/characters';
import Route from '../../routes/routes';
import addThreeDocs from '../../../helpers/helperFuncs';
import { characterBookmarkAction } from '../../../redux/actions/general';

const Card = ({ name, thumbnail, id, character }: Partial<Result>) => {
  const location = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    location(`${Route.Characters}/${id}`);
  };

  const handleBookmark = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

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
