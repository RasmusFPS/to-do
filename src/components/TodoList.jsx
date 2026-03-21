import React, { useEffect } from 'react'
import TodoInput from './Todolist-components/TodoInput'
import TodoItem from './Todolist-components/TodoItem'
import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("my-todo-list");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("my-todo-list", JSON.stringify(todos));
    }, [todos]);

    function handleAddTodo(newTodoText) {
        if (newTodoText.trim() !== "") {
            setTodos([...todos, newTodo]);
        }
    }

    function removeTodo(indexToRemove) {
        const copyTodo = [...todos];
        copyTodo.splice(indexToRemove, 1);
        setTodos(copyTodo);
    }

return (
    <div>
        <div className="nav">To-Do List</div>

        <TodoInput OnAdd={handleAddTodo} />

        <div className="todo-items">
            {todos.map((item, index) => (
                <TodoItem 
                key={index} 
                task={item} 
                number={index}
                onDelete={removeTodo}
                />
            ))}
        </div>
    </div>
)
}

export default TodoList
