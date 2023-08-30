import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import TaskList from '../components/TaskList';
import TaskTable from '../components/TaskTable';
import { FaRegCalendarCheck } from 'react-icons/fa';


function TasksPage({ setTask }) {
    // Use the Navigate for redirection
    const navigate = useNavigate();

    // Use state to bring in the data
    const [tasks, setTasks] = useState([]);

    // RETRIEVE the entire list of tasks
    const loadTasks = async () => {
        const response = await fetch('/log');
        const tasks = await response.json();
        setTasks(tasks);
    } 
    

    // UPDATE a single task
    const onEditTask = async task => {
        setTask(task);
        navigate("/update");
    }


    // DELETE a single movie  
    const onDeleteTask = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/log');
            const tasks = await getResponse.json();
            setTasks(tasks);
        } else {
            console.error(`Delete was successful: No content will be returned. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the movies
    useEffect(() => {
        loadTasks();
    }, []);

    // DISPLAY the movies
    return (
        <>
            <h2><i><FaRegCalendarCheck /></i>List of Tasks</h2>
            <p>Click on the add, delete, or edit icons to add, update, or delete a task.</p>
            <TaskTable 
                tasks={tasks} 
                onEdit={onEditTask} 
                onDelete={onDeleteTask} 
            />
        </>
    );
}

export default TasksPage;