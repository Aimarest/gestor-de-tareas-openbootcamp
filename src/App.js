import '././styles/App.css';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import React from 'react';
//import ContactListComponent from './components/container/contact_list';
//import { useState } from 'react';
function App() {
  return (
    <div className="App">
   <TaskListComponent/>
    </div>
  );
}

export default App;
