import { useState } from 'react';

function AddTodoForm({ onTodoAdd }) {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [body, setBody] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      title,
      body,
      completed,
      id: Math.random().toString(),
    };
    onTodoAdd(newTodo);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="todoName" className="form-label">
          Add Title
        </label>
        <input
          type="text"
          className="form-control"
          id="todoName"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todoName" className="form-label">
          Add Body
        </label>
        <input
          type="text"
          className="form-control"
          id="todoName"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="completed"
          value={completed}
          onChange={(event) => {
            setCompleted(event.target.value);
          }}
        />
        <label className="form-check-label" htmlFor="completed">
          Completed
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddTodoForm;
