import React from 'react'

export const TaskList = ({ taskList }) => {
    console.log(taskList);

    return (
        <div class="col-md-6 mb-5">
            <h2 class="text-center">Task list</h2>
            <hr />
            <div class="list-items">
                <table class="table table-striped w-100">
                    <tbody id="task-list">
                        {taskList.map((item, i) => {
                            return (
                                <tr>
                                    <td><input type="checkbox" /> {item.task}</td>

                                    <td>{item.hr} hours</td>

                                    <td class="text-end">
                                        <button class="btn" onclick="deleteItem(${i})">
                                            <i class="fa fa-trash btn-danger btn-sm" title="Delete" ></i>
                                        </button>

                                        <button class="btn">
                                            <i class="fa fa-arrow-right btn-sm btn-warning" onclick="markAsNotToDo(${i})" title="Mark as a bad list" ></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

