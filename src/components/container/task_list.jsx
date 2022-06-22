import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import {  Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                <h1> Your Tasks: </h1>
            </div>
            {/* To do: Aplicar un map o un for para renderizar una lista*/}
            <TaskComponent task={defaultTask} />
        </div>
    );
};




export default TaskListComponent;
