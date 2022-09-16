interface IProps {
  checked: boolean;
  title: string;
  onChecked: (checked: boolean) => void;
  onDelete: () => void;
}

const TodoItem = ({ checked, title, onChecked, onDelete }: IProps) => {
  return (
    <li className="todolist-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChecked(e.target.checked)}
      />
      {title}
      <button onClick={onDelete}>x</button>
    </li>
  );
};

export default TodoItem;
