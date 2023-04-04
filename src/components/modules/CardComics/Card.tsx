import { useNavigate } from 'react-router-dom';
import { Result } from '../../../interface/comics';
import Route from '../../routes/routes';
import { shortenString } from '../../../helpers/constants';

const Card = ({ title, id, thumbnail }: Partial<Result>) => {
  const location = useNavigate();
  const handleClick = () => {
    location(`${Route.Comics}/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        className="card--image"
        src={thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : undefined}
        alt={title}
      />
      <h3 className="card--name">{shortenString(title, 32)}</h3>
    </div>
  );
};

export default Card;
