import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

    const addTask = (text) => {
        setTasks([...tasks, { text, isCompleted: false }]);
    };

    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        } else {
            alert('Task cannot be empty');
        }
    };

    const updateTask = (index, newText) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = newText;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const toggleCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
        setTasks(updatedTasks);
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'active') return !task.isCompleted;
        if (filter === 'completed') return task.isCompleted;
        return true; // 'all' shows everything
    });

    return (
        <div className="todo-list">
            <div className="input-section">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add new task..."
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <div className="filter-section">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>

            <ul>
                {filteredTasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        task={task.text}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        toggleCompletion={toggleCompletion}
                        isCompleted={task.isCompleted}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
