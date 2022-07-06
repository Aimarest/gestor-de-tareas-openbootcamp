import '././styles/App.css';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import React from 'react';
import LoginFormik from './components/pure/forms/LoginFormik';
//import ContactListComponent from './components/container/contact_list';
//import { useState } from 'react';
function App() {
  return (
    <div className="App">
    <LoginFormik/>
   <TaskListComponent/>
    </div>
  );
}

export default App;
