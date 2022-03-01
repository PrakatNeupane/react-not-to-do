import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './components/Title';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { BadList } from './components/BadList';
import { TotalHours } from './components/TotalHours';

function App() {
  // for the form data to pass to the tasklist, we first transfer the data to parent
  // for this, we create a function in the parent and by props, call that function in the taskList
  // we are doing this after working for a bit in form

  const [taskList, setTaskList] = useState([]);

  const addNewTask = task => {
    setTaskList([...taskList, task])
  }
  console.log(taskList);
  // so far we have created object in the form, and then trasnferring that object to the array in the parent
  //now this array must be displayed in the taskList
  return (
    <div class="wrapper">
      <div class="container">
        {/* Title */}
        <Title></Title>

        {/* <!-- Form area --> */}
        <Form addNewTask={addNewTask}></Form>

        {/* <!-- list area --> */}
        <div class="row">
          {/* Task list */}
          <TaskList taskList={taskList} />
          {/* bad list */}
          <BadList />
        </div>

        {/* Total time saved */}
        <TotalHours />
      </div>
    </div>
  );
}

export default App;
