import React, { useState } from 'react';

function TodoItem({ index, task, updateTask, deleteTask, toggleCompletion, isCompleted }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(task);

    const handleUpdate = () => {
        updateTask(index, editValue);
        setIsEditing(false);
    };

    return (
        <li className={`todo-item ${isCompleted ? 'completed' : ''}`}>
            <input 
                type="checkbox" 
                checked={isCompleted} 
                onChange={() => toggleCompletion(index)} 
            />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button onClick={handleUpdate} className="save">Save</button>
                </>
            ) : (
                <>
                    <span>{task}</span>
                    <div>
                        <button onClick={() => setIsEditing(true)} className="edit">Edit</button>
                        <button onClick={() => deleteTask(index)} className="delete">Delete</button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TodoItem;
