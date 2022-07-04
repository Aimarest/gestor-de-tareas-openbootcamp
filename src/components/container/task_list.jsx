import React, {useEffect, useState} from 'react';
import { LEVELS } from '../../models/levels.enum';
import {  Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);

    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
    
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

    //Estado del componente:

    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
    const [loading, setloading] = useState(true);

    //Control del ciclo de vida del componente:

    useEffect(() => {
       console.log('Task State has been modified');
       setloading(false);
        return () => {
            console.log('Taskslist component is going to unmount...')
        };
    }, [tasks]);
function handleCompleteTask  (task) {
      const index=  tasks.indexOf(task);
       const tempTask = [...tasks];
       tempTask[index].completed = !tempTask[index].completed;
       setTasks(tempTask);

    }
function handleDelete(task){
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
   tempTask.splice(index,1);
     setTasks(tempTask)
}
function addTask(task){
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
   tempTask.push(task);
     setTasks(tempTask)
}
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/*Card header:title*/ }
                    <div className='card-header p-3'>
                        <h5> 
                        Your Tasks: 
                        </h5>
                    </div>
                    {/*Card body:content*/ }
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>
                                        Title
                                    </th>
                                    <th scope='col'>
                                        Description
                                    </th>
                                    <th scope='col'>
                                        Priority
                                    </th>
                                    <th scope='col'>
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (<TaskComponent key={index} task={task} handleCompleteTask={handleCompleteTask} handleDelete={handleDelete}/>)
                                })}
<TaskForm add={addTask} />

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
    
         
        </div>
    );
};




export default TaskListComponent;
