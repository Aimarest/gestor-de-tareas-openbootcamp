import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import '../../styles/task.scss';
const TaskComponent = ({ task, handleCompleteTask , handleDelete}) => {

    useEffect(() => {
       console.log(' Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
            default:
                break;
        }
    }
    
    function taskCompletedIcon (){
        if(task.completed){
            return(<i className='bi-toggle-on task-action' style={{color:'green'}} onClick={()=>handleCompleteTask(task)}></i> )
        }
    else{
        return (<i className='bi-toggle-off task-action'style={{color:'grey'}} onClick={()=> handleCompleteTask(task)}></i>)
        
    }};

    /*También se podría hacer con variables de estilo:
    const taskCompleted = {
        color:'gray',
        fontWeight:'bold',
        textDecoration:'line-through'
    }
    const taskPending = {
        fontWeight:'bold',
        color: 'tomato'
    }
    <tr className="fw-normal" style={task.completed ? taskCompleted : taskPending }>
    */
    return (

<tr className={`fw-normal ${task.completed ? 'task-completed' : 'task-pending'}`}>
<th>
    <span className='ms-2'>{task.name}</span>
</th>
<td className='align-middle'>
<span>
    {task.description}
</span>
</td>
<td className='align-middle'>
<span>
    {taskLevelBadge()}
</span>
</td>
<td className='align-middle'>

    {taskCompletedIcon()}
<i className='bi-trash task-action'style={{color:'tomato'}} onClick={()=>handleDelete(task)}></i>
</td>
</tr>
    );
};
TaskComponent.propTypes = {
task: PropTypes.instanceOf(Task),
handleCompleteTask: PropTypes.func.isRequired,
handleDelete: PropTypes.func.isRequired

};


export default TaskComponent;
