import { createContext, PropsWithChildren } from 'react';
import { useLocalStorage } from 'react-use';
import { ITodo } from '../types';

interface IRootContext {
  todos: ITodo[];
  setTodos?: (todos: ITodo[]) => void;
}

export const RootContext = createContext<IRootContext>({
  todos: [],
});

export const RootProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);
  return (
    <RootContext.Provider value={{ todos: todos ?? [], setTodos }}>
      {children}
    </RootContext.Provider>
  );
};
