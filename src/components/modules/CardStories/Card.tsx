import { useNavigate } from 'react-router-dom';
import { Result } from '../../../interface/stories';
import Route from '../../routes/routes';
import { IMAGE_NOT_FOUND, shortenString } from '../../../helpers/constants';

const Card = ({ title, id, thumbnail }: Partial<Result>) => {
  const location = useNavigate();
  const handleClick = () => {
    location(`${Route.Stories}/${id}`);
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
      <h3 className="card--name">{shortenString(title)}</h3>
    </div>
  );
};

export default Card;
