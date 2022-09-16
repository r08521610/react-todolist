import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use'
import { ITodo } from '../types';

const Home = () => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = useCallback(() => {
    const data = [...todos ?? [], { title, description, done: false }];
    setTodos(data);
    setTitle('');
    setDescription('');
  }, [todos, title, description]);

  const removeTodo = useCallback(
    (item: ITodo) => {
      const data = [...(todos ?? []).filter((todo) => todo.title !== item.title)];
      setTodos(data);
    },
    [todos]
  );

  const toggleDone = useCallback(
    (todo: ITodo, checked: boolean) => {
      const data = [
        ...(todos??[]).map((item) =>
          item.title === todo.title ? { ...item, done: checked } : item
        ),
      ];
      setTodos(data);
    },
    [todos]
  );

  return (
    <div>
      <h1>Todo List</h1>
      <div className='todolist-input'>
        <input
          type='text'
          placeholder='input text...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTodo}>+</button>
      </div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.title} className='todolist-item'>
            <input
              type='checkbox'
              checked={todo.done}
              onChange={(e) => toggleDone(todo, e.target.checked)}
            />
            {todo.title}
            <button onClick={() => removeTodo(todo)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
