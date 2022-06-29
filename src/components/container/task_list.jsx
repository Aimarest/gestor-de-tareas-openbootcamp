import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import {  Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);

    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
    
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);
    
    const [tasks, settasks] = useState(defaultTask1,defaultTask2,defaultTask3);

    return (
        <div>
            <div>
                <h1> Your Tasks: </h1>
            </div>
            {/* To do: Aplicar un map o un for para renderizar una lista*/}
            <TaskComponent task={tasks} />
        </div>
    );
};




export default TaskListComponent;
