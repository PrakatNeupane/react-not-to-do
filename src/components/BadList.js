import React from 'react'

export const BadList = ({ badList, markAsTask, handleOnDeleteBadList }) => {
    return (
        <div class="col-md-6 mb-5">
            <h2 class="text-center">Bad list</h2>
            <hr />
            <div class="list-items">
                <table class="table table-striped w-100">
                    <tbody id="bad-list"></tbody>
                    {badList.map((item, i) => {
                        return (
                            <tr>
                                <td><input type="checkbox" /> {item.task}</td>

                                <td>{item.hr} hours</td>

                                <td class="text-end">

                                    <button class="btn">
                                        <i class="fa fa-arrow-left btn-sm btn-warning" onClick={() => { markAsTask(i) }} title="Mark as a bad list" ></i>
                                    </button>
                                    <button class="btn" onClick={() => { handleOnDeleteBadList(i) }}>
                                        <i class="fa fa-trash btn-danger btn-sm" title="Delete" ></i>
                                    </button>


                                </td>
                            </tr>
                        )
                    })}


                </table>
            </div>
            <div class="ttl-bad text-end text-light text-end">
                Total time saved = <span id="bad-hours">0</span> hr
            </div>
        </div>
    )
}
