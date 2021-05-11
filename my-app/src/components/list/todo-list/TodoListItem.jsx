function TodoListItem (todo) {
    return (
        <div
            className={'list-group-item list-group-item-action list-group-item-warning'}
        >
            {todo.title}
        </div>
    )
}
export default TodoListItem;