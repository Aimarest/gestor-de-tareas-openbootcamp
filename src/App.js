import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import React from 'react';
//import ContactListComponent from './components/container/contact_list';
//import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   {/* <Greeting name="Ana"/>*/ }
   {/*<GreetingF name ="Ana"/>*/}
   <TaskListComponent/>
  {/* <ContactListComponent/>*/}
      </header>
    </div>
  );
}

export default App;
