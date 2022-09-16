import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { RootContext } from '../store';

const Detail = () => {
  const { id } = useParams();
  const { todos } = useContext(RootContext);
  const todo = useMemo(() => todos.find(item => item.title === id), [todos, id])
  return <>Detail page for todo: {todo?.title} {todo?.description}</>;
};

export default Detail;
