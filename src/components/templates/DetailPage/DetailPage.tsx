import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  return <div>Welcome to {id}</div>;
};

export default DetailPage;
