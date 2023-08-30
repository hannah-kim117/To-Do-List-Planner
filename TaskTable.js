import TaskRow from './TaskRow';
import TableHead from './TableHead';
import TaskList from './TaskList';


function TaskTable( { tasks, onDelete, onEdit}) {
    return (
        <table id='taskTable'>
            <caption>List of of tasks that need to be completed.</caption>
            <TableHead />
            
            <TaskList
                tasks={tasks} 
                onEdit={onEdit} 
                onDelete={onDelete} 
            />
           
            <tfoot>

            </tfoot>

        </table>
    );


}

export default TaskTable