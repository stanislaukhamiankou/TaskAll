import {useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import './Header.scss';
import './ToDoList.scss';

const filterMap = {
    all: 'all', 
    open: 'open',
    closed: 'closed'
}

function Todo(){

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [filter, setFilter] = useState(filterMap.all);

    return (
        <div>
            <Header 
                todo={todo} 
                setTodo={setTodo}
                todos={todos} 
                setTodos={setTodos}
                setFilter={setFilter}
                filterMap={filterMap}
            />
            <ToDoList
                todo={todo} 
                setTodo={setTodo}
                todos={todos} 
                setTodos={setTodos}
                todoEditing={todoEditing}
                setTodoEditing={setTodoEditing}
                editingText={editingText}
                setEditingText={setEditingText}
                filter={filter}
                setFilter={setFilter}
                filterMap={filterMap}
            />
        </div>
    );
}
export default Todo;