const { TodoItem } = window.App;

class TodoList extends React.Component {
render() {
        const {
            todos,
            onDeleteTodo
        } = this.props
        const elements = todos.map(todo => ( < li key = { todo.id } >
            < TodoItem title = { todo.title }
            completed = { todo.completed }
            onDelete = {
                () => onDeleteTodo && onDeleteTodo(todo.id) }
            / > < /li >
        ));
        console.log(' {elements} = ', { elements });
        return ( < ul > { elements } < /ul>);
        }
}
TodoList.propTypes = {
    todos: React.PropTypes.array,
    onDelete: React.PropTypes.func
};

window.App.TodoList = TodoList;

