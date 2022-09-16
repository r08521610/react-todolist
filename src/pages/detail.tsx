import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ITodo } from '../types';

interface IProps {
  todos?: ITodo[]
}

const Detail = ({todos}: IProps) => {
  const { id } = useParams();
  const todo = useMemo(() => todos?.find(item => item.title === id), [todos, id])
  return <>Detail page for todo: {todo?.title} {todo?.description}</>;
};

export default Detail;
