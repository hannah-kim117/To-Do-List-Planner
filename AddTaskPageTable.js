import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTaskPageTable = () => {

    const [title, setTitle]       = useState('');
    const [count, setCount]         = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate();

    const addTask = async () => {
        const newTask = { title, count, date };
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`New resource has been successfully created and is now ready for interaction.`);
        } else {
            alert(`Server was not able to successfully add the resource. = ${response.status}`);
        }
        redirect("/log");
    };


    return (
        <>
        <article>
            <h2>Add a task</h2>
            <p>Click the add icon to update the Planner Log.</p>
            
            <table id="tasks">
                <caption>Which task are you adding?</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Count</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="title">Task title</label>
                        <input
                            type="text"
                            placeholder="Title of the task"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label for="count">Task Count</label>
                        <input
                            type="number"
                            value={count}
                            placeholder="Number of task"
                            onChange={e => setCount(e.target.value)} 
                            id="count" />
                    </td>

                    <td><label for="date">Due Date</label>
                        <input
                            type="date"
                            placeholder="Due date of the task"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Submit Task</label>
                        <button
                            type="submit"
                            onClick={addTask}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTaskPageTable;