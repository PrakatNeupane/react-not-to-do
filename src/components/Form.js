import React, { useState } from 'react'

const initialSate = { task: '', hr: '' }
export const Form = ({ addNewTask }) => {

    // const [taskList, setTaskList] = useState([]); // taskList is an object here with property of task and hr
    // in order to transfer the data from form to taskList, we are transferring this state to the App.js
    const [newTask, setNewTask] = useState(initialSate); // this has been added a bit later
    // initializing the useState with object...however we need an array lol (dont worry about this if you dont get it)

    const handleOnChange = e => {
        const { value, name } = e.target;
        // const taskObj = {
        // [name]: value,   // try with name:value, you will see name:sdf, name:5, in the console, however, you want the name of the task or hour so wrap it up in []
        // technically it is referring to the incoming variable with the square brackets
        setNewTask({
            ...newTask,// before doing ...newTask, try with [name]:value only and console newTask and try typing in the form.....data gets replaced
            // with this spread operator, we are keeping what we already have and keeping new data after that
            //[name]: value, // we add + sign to convert hr to the number, but this will convert the string to number, illegal, throws NaN. for this we use ternary operator
            [name]: name === 'hr' ? +value : value,
        })
    }
    // console.log(taskObj);
    // try with e, e.target, e.target.value, e.target.name and then you can destructure
    console.log(newTask);

    // creating the function to prevent default loading of the page
    const handleOnSubmit = e => {
        e.preventDefault();
        // setTaskList([...taskList, newTask]) // same as doing taskList.push but dont do that in react
        // later we take this to App.js
        addNewTask(newTask); // this step is the one added only after you work on the app.js .... not in the beginning
        setNewTask(initialSate); // after this we set the value property in the form input fields
        // we are updating the state with empty fields of initialState so that our input will be empty
        // mechanism --> whatever we are typing in the input field, the value is going to the stae
        // and the same value is being displayed in the input field....so after we give an input 
        // and after the data is stored in the array, we want to clear the field 
    }

    return (
        <div class="row">
            <div class="col p-5">
                <div class="form-box pb-4">
                    <form

                        onSubmit={handleOnSubmit}
                        class="row gx-3 d-flex justify-content-center gy-2 align-items-center"
                    >
                        <div class="col-md-4">
                            <label class="visually-hidden" for="specificSizeInputName"
                            >Name</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                name="task"
                                onChange={handleOnChange}
                                // previously,we had to do handleOnChange(this), but react does this for us now
                                id="specificSizeInputName"
                                placeholder="Your task"
                                value={newTask.task} // doing this to clear the input field after submitting 
                                // and also setting the value in the input field to the state ... and after it clears the input
                                required
                            />
                        </div>
                        <div class="col-md-4">
                            <div class="input-group">
                                <input
                                    type="number"
                                    name="hr"
                                    onChange={handleOnChange}

                                    class="form-control"
                                    id="specificSizeInputGroupUsername"
                                    placeholder="Hours"
                                    value={newTask.hr} // doing this to clear the input field after submitting

                                    required
                                />
                            </div>
                        </div>

                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



