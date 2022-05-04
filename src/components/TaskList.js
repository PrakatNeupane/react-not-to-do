import React from 'react'

export const TaskList = ({ taskList, handleOnDeleteTaskList, markAsNotToDo }) => {
    console.log(taskList);

    return (
        <div className="col-md-6 mb-5">
            <h2 className="text-center">Task list</h2>
            <hr />
            <div className="list-items">
                <table className="table table-striped w-100">
                    <tbody id="task-list">
                        {taskList.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td><input type="checkbox" /> {item.task}</td>

                                    <td>{item.hr} hours</td>

                                    <td className="text-end">
                                        <button className="btn" onClick={() => { handleOnDeleteTaskList(i) }}>
                                            <i className="fa fa-trash btn-danger btn-sm" title="Delete" ></i>
                                        </button>

                                        <button className="btn">
                                            <i className="fa fa-arrow-right btn-sm btn-warning" onClick={() => { markAsNotToDo(i) }} title="Mark as a bad list" ></i>
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

