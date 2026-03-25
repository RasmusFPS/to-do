import React from 'react'
import { useState } from 'react';

function TodoInput({ OnAdd }) {
        const [todoText, SetTodo] = useState("");

    function handleTodo(event){
        event.preventDefault();
        if(todoText.trim() != "" && isTooLong(todoText) == 1){
            OnAdd(todoText);
            Clear();
        }
    }

    function isTooLong(todoText){
        let length = todoText.length;
        if(length >= 30){
            console.log("Too long string");
            window.alert(`Error: String execceded the limit is 30 chars`);
            Clear();
            return 0;
        }
        else{
            return 1;
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
            placeholder='Add To-do: 30 Character Limit'
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
