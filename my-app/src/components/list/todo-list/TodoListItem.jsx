function TodoListItem(todo) {
  return (
    <div
      className={`list-group-item list-group-item-action ${
        todo.completed ? 'list-group-item-primary' : ''
      }`}>
      {todo.title}
    </div>
  );
}
export default TodoListItem;
