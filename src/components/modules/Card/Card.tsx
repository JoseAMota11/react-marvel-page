import { useNavigate } from 'react-router-dom';
import { Result } from '../../../interface/characters';
import Route from '../../routes/routes';

const Card = ({ name, thumbnail, id }: Partial<Result>) => {
  const location = useNavigate();
  const handleClick = () => {
    location(`${Route.Characters}/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        className="card--image"
        src={thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : undefined}
        alt={name}
      />
      <h3 className="card--name">{name}</h3>
    </div>
  );
};

export default Card;
