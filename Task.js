import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Task({ task, onEdit, onDelete }) {
    return (
        <tr>
            <td>{task.title}</td>
            <td>{task.count}</td>
            <td>{task.date}</td>
            <td><MdDeleteForever onClick={() => onDelete(task._id)} /></td>
            <td><MdEdit onClick={() => onEdit(task)} /></td>
        </tr>
    );
}

export default Task;