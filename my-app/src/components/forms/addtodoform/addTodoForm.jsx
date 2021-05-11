import { useState } from "react";

function AddTodoForm ({onTodoAdd}) {
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);
    const onSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            title, completed,
            id: Math.random().toString(),
        };
        onTodoAdd(newTodo);
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="todoNasme" className="form-label">TodoName - {title}</label>
                <input type="text" className="form-control" id="todoName" value={title} onChange={(event)=> {
                    setTitle(event.target.value);
                }}/>
            </div>
            
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="completed" value={completed} onChange={(event) =>{
                    setCompleted(event.target.value);
                }}/>
                <label className="form-check-label" htmlFor="completed">Completed</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddTodoForm;