import React, { use } from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput'

function TodoItem({ task,number, onDelete }) {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="Todo-card">
      <p style={{textDecoration: isChecked ? "line-through" : "none"}}>
        <span>{number +1}.</span>{task}
      </p>
      <label class="container">
      <input type="checkbox" onChange={() => setIsChecked(!isChecked)}/>
    <span class="checkmark"></span>
</label>
      <button className="remove-btn" id={number} onClick={() => onDelete(number)}>remove</button>
    </div>
  );
}

export default TodoItem
