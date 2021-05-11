import { useState } from "react";
import AddTodoForm from "../../components/forms/addtodoform/addTodoForm";
import TodoList from "../../components/list/todo-list/TodoList";
import TodoListArray from "../../data/TodoList";


function TodoHome (props) {
    const [todoList, setTodoList] = useState(TodoListArray);
        
        const onTodoAdd = (newTodo) => {
            const newList = [...todoList, newTodo];
            setTodoList(newList);
        };
    
    return (
        <div className="row">
            <h1>Todo</h1>
            <div className="col-6">
                <AddTodoForm onTodoAdd={onTodoAdd}/>
            </div>
            <div className="col-6">
                <TodoList data = {todoList} />
            </div>
            
        </div>
    )
}


export default TodoHome;