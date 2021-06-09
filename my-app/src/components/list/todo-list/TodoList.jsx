import { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

function TodoList({ data = [] }) {
  useEffect(() => {
    console.info('todo list changed');
    console.log(data);
  }, [data]);

  return (
    <div className="row">
      <h2>Todo List</h2>
      <div className="col-12">
        <div className="list-group">
          {data.map((todo) => {
            return <TodoListItem todo={todo} key={todo.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
