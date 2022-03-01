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

  // after the delete functionality, we build shift function, for that, the selected item is filtered out and then stored in new state

  const [badList, setBadList] = useState([])


  const addNewTask = task => {
    setTaskList([...taskList, task])
  }
  console.log(taskList);
  // so far we have created object in the form, and then trasnferring that object to the array in the parent
  //now this array must be displayed in the taskList

  // delete functionality
  const handleOnDeleteTaskList = (i) => {
    console.log(i);

    if (window.confirm("Are you sure you want to delete this task?")) {
      const newArg = taskList.filter((item, index) => index !== i);
      // the index we are receiving from the taskList component..is it equal to the taskList index

      setTaskList(newArg);
    }
  }

  // delete badList 
  const handleOnDeleteBadList = (i) => {
    console.log(i);

    if (window.confirm("Are you sure you want to delete this task?")) {
      const newArg = badList.filter((item, index) => index !== i);
      // the index we are receiving from the taskList component..is it equal to the taskList index

      setBadList(newArg);
    }
  }

  // take item from taskList and put in the BadList
  const markAsNotToDo = i => {
    // console.log(i);
    const selectedItem = taskList[i];
    // console.log(selectedItem);
    setBadList([...badList, selectedItem])
    const newArg = taskList.filter((item, index) => index !== i);
    setTaskList(newArg)

  }
  // console.log(badList);

  // take item from BadList and put in the taskList
  const markAsTask = i => {
    // console.log(i);
    const selectedItem = badList[i];
    // console.log(selectedItem);
    setTaskList([...taskList, selectedItem])
    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg)

  }



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
          <TaskList taskList={taskList} handleOnDeleteTaskList={handleOnDeleteTaskList} markAsNotToDo={markAsNotToDo} />
          {/* bad list */}
          <BadList badList={badList} markAsTask={markAsTask} handleOnDeleteBadList={handleOnDeleteBadList} />
        </div>

        {/* Total time saved */}
        <TotalHours />
      </div>
    </div>
  );
}

export default App;
