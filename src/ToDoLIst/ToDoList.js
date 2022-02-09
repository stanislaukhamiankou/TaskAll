import {useMemo, useState} from 'react';

function ToDoList({todo, setTodos, todos, todoEditing, setTodoEditing, editingText, setEditingText, filter, filterMap}){
    const deleteTodo = ((id) => {
      let updatedTodos = [...todos].filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    });
  
    const toggleTask = ((id) => {
      setTodos([
        ...todos.map((todo) => 
          todo.id === id ? { ...todo, completed: !todo.completed } : {...todo })
        ])
      console.log(todo.comleted);
    });
  
    const submitEdits = ((id) => {
      const updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
    });

    const memo = useMemo(() => {
      if(filter === filterMap.all){
        return todos;
      }
      else if(filter === filterMap.open){
          const newTodo = [...todos].filter(item => item.completed);
          console.log(newTodo);
          return newTodo;
      }
      else if(filter === filterMap.closed){
          const newTodo = [...todos].filter(item => !item.completed);
          console.log(newTodo);
          return newTodo;
      }
    }, [filter, todos])

    return (
      <div id="todo-list">        
      {
          memo.map((todo) => (
            <div key={todo.id} className="todo">
              <div className="todo-text">
                {todo.id === todoEditing ? (
                  <input onChange={(e) => setEditingText(e.target.value)}/>
                ) : (
                  <div className={todo.comleted ? "item-text strike" : "item-text"} onClick={() => toggleTask(todo.id)}>
                    {todo.text}
                  </div>
                )}
              </div>
              <div className="todo-actions">
                {todo.id === todoEditing ? (
                  <button onClick={() => submitEdits(todo.id)} className='button-todo'>Submit Edits</button>
                ) : (
                  <button onClick={() => setTodoEditing(todo.id)} className='button-todo'>Edit</button>
                )}
                <button onClick={() => deleteTodo(todo.id)} className='button-todo'>Delete</button>
              </div>
            </div>
          ))}
        </div>
    );
  };

export default ToDoList;