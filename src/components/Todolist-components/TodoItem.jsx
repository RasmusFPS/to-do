import TodoInput from './TodoInput'

function TodoItem({ task,number,completed, onDelete,onToggle }) {

  return (
    <div className="Todo-card">
      <p style={{textDecoration: completed ? "line-through" : "none"}}>
        <span>{number +1}.</span>{task}
      </p>
      <label className="container">
      <input type="checkbox" checked={completed} onChange={() => onToggle(number)}/>
    <span className="checkmark"></span>
</label>
      <button className="remove-btn" id={number} onClick={() => onDelete(number)}>remove</button>
    </div>
  );
}

export default TodoItem
