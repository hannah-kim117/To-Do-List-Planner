import React from 'react';
import Task from './Task';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function TaskList({ tasks, onDelete, onEdit }) {
    return (
        <table id="tasks">
            <caption></caption>
            {/* <thead>
                <tr>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Title</th>
                </tr>
            </thead> */}
            <tbody>
                {tasks.map((task, i) => 
                    <Task 
                        task={task} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TaskList;
