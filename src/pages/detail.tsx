import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  return <>Detail page for todo: {id}</>;
};

export default Detail;
