
import React from 'react';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

function TaskRow( { task, onDelete, onEdit }) {

    return (
        <tr>
            <td><i><RiDeleteBinLine onClick={() => onDelete(task._id)} title="Click" ></RiDeleteBinLine></i></td>
            <td><i><RiEdit2Line onClick={() => onEdit(task)} title="Editing"></RiEdit2Line></i></td>
            <td>  {task.title} </td>
            <td> {task.count} </td>
            <td> {task.date} </td>
        
        </tr>
    );
}

export default TaskRow;