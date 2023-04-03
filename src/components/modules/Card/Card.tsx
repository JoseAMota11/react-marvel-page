import { Result } from '../../../interface/marvel';

const Card = ({ name, thumbnail }: Partial<Result>) => (
  <div className="card">
    <img
      className="card--image"
      src={thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : undefined}
      alt={name}
    />
    <h3 className="card--name">{name}</h3>
  </div>
);

export default Card;
