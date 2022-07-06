import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
const TaskForm = ({add,length}) => {
const nameRef = useRef('');
const descriptionRef = useRef('');
const levelRef = useRef(LEVELS.NORMAL);

function addTask(e){
    e.preventDefault();
    const newTask = new Task(
        nameRef.current.value,
        descriptionRef.current.value,
        false,
        levelRef.current.value );
        add(newTask)
}
let optionNormal = {
    backgroundColor:'blue',
    color: 'lightBlue',
    fontWeight: 'bold'
}
let optionUrgent = {
    backgroundColor:'gold',
    color: 'orange',
    fontWeight: 'bold'
}
let optionBlocking = {
    backgroundColor:'tomato',
    color: 'red',
    fontWeight: 'bold'
}
    return (
        <div>
            <h2>Añadir tarea</h2>
            <form className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title'className='form-control form-control-lg' required ref={nameRef}></input>
            <label htmlFor='description'>Description</label>
            <input id='description'className='form-control form-control-lg' required  ref={descriptionRef}></input>
            <label htmlFor='level'>Level</label>
            <select id='level' className='form-control form-control-lg' defaultValue={LEVELS.NORMAL}  ref={levelRef}>
                <option style={optionNormal} value={LEVELS.NORMAL}>NORMAL</option>
                <option style={optionUrgent} value={LEVELS.URGENT}>URGENT</option>
                <option style={optionBlocking} value={LEVELS.BLOCKING}>BLOCKING</option>
            </select>
            <button type='submit' className='btn btn-success btn-lg ms-2' onClick={addTask}>{length > 0 ?'Add task': 'Create your first task'}</button>
            </div>
            </form>
        </div>
    );
}
TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}
export default TaskForm;
