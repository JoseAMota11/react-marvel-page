type NoResultsProps = {
  message: string;
};

const NoResults = ({ message }: NoResultsProps) => {
  return <div className="no-results">No {message}</div>;
};

export default NoResults;
