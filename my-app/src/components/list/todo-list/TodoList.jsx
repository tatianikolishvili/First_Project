import { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

function TodoList ({ data = []}) {

    useEffect(() => {
        console.info('todo list changed')
        console.log(data)
    }, [data]);

    return (
        <div className="list-group">
            {data.map((todo) => {
            return <TodoListItem todo={todo} key={todo.id}/>
            })}
        </div>
    )
}

export default TodoList;