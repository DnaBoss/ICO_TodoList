const { TodoItem } = window.App;

class TodoList extends React.Component {
render() {
        const {
            todos,
            onDeleteTodo,
            onToggleTodo
        } = this.props
        const elements = todos.map(todo => ( < li key = { todo.id } >
            < TodoItem title = { todo.title }
            completed = { todo.completed }
            onDelete = {() => onDeleteTodo && onDeleteTodo(todo.id) }
            onToggle={(completed)=>onToggleTodo&&onToggleTodo(todo.id,completed)}
            / > < /li >
        ));
        console.log(' {elements} = ', { elements });
        return ( < ul > { elements } < /ul>);
        }
}
TodoList.propTypes = {
    todos: React.PropTypes.array,
    onDelete: React.PropTypes.func,
    onToggleTodo:React.PropTypes.func
};

window.App.TodoList = TodoList;

