import React from 'react'
import { useState } from 'react';

function TodoInput({ OnAdd }) {
        const [todoText, SetTodo] = useState("");

    function handleTodo(event){
        event.preventDefault();
        if(todoText.trim() != ""){
            OnAdd(todoText);
            Clear()
        }
    }

    function handleChange(event){
        SetTodo(event.target.value);
    }

    function Clear(){
        SetTodo("")
    }

return (
<div className ="search-section">
    <form className="Todo-form" onSubmit={handleTodo}>
        <input
            type="text"
            placeholder='Add To-do'
            className="search-input"
            value={todoText}
            onChange={handleChange}
        />
            <button type="submit" className="add-button">
                Add to list
            </button>
    </form>
</div>
);
}

export default TodoInput
