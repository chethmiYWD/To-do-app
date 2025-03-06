import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (index, updatedTask) => {
        const newTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="app-container">
            <h2>React To-Do List</h2>
            <TodoList tasks={tasks} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
