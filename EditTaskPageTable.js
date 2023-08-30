import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTaskPageTable = ({ taskToEdit }) => {
 
    const [title, setTitle]  = useState(taskToEdit.title);
    const [count, setCount]     = useState(taskToEdit.count);
    const [date, setDate] = useState(taskToEdit.date.slice(1,10));
    
    const redirect = useNavigate();

    const editTask = async () => {
        const response = await fetch(`/log/${taskToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                count: count, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Updating the document was successful.`);
        } else {
            const errMessage = await response.json();
            alert(`Updating of the document had failed. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/update");
    }

    return (
        <>
        <article>
            <h2>Edit a task</h2>
            <p>Click the edit icon to update the Planner Log.</p>
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
                    <label for="submit">Submit Edit</label>
                        <button
                            type="submit"
                            onClick={editTask}
                            id="submit"
                        >Save Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTaskPageTable;