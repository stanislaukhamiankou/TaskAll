function Header({todo, setTodo, todos, setTodos, setFilter, filterMap}){

    const handleSubmit = ((e) => {
        e.preventDefault();
        
        if(todo){
            const newTodo = {
                id: new Date().getTime(),
                text: todo,
                completed: false
            };
            setTodos([...todos].concat(newTodo));
        }
        setTodo("");
    });

    
    const sortTodo = (() => {
        const newTodo = [...todos].sort((a, b) => a.text.localeCompare(b.text));
        setTodos(newTodo);
        console.log(newTodo);
    });

    return(
        <div id="todo-list">
        
            <h1>To do List: {todos.length}</h1>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button type="submit" className="button-todo">Add Todo</button>
            </form>
            
            <button onClick={() => sortTodo()} className="button_nav">Sort</button>
            <button onClick={() => setFilter(filterMap.all)} className="button_nav">All</button>
            <button onClick={() => setFilter(filterMap.open)} className="button_nav">Open Tasks</button>
            <button onClick={() => setFilter(filterMap.closed)} className="button_nav">Closed Tasks</button>
        </div>
    );
}

export default Header;