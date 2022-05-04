import React from 'react'

export const BadList = ({ badList, markAsTask, handleOnDeleteBadList, ttlBadHours }) => {

    return (
        <div className="col-md-6 mb-5">
            <h2 className="text-center">Bad list</h2>
            <hr />
            <div className="list-items">
                <table className="table table-striped w-100">
                    <tbody id="bad-list">
                        {badList.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td><input type="checkbox" /> {item.task}</td>

                                    <td>{item.hr} hours</td>

                                    <td className="text-end">

                                        <button className="btn">
                                            <i className="fa fa-arrow-left btn-sm btn-warning" onClick={() => { markAsTask(i) }} title="Mark as a bad list" ></i>
                                        </button>
                                        <button className="btn" onClick={() => { handleOnDeleteBadList(i) }}>
                                            <i className="fa fa-trash btn-danger btn-sm" title="Delete" ></i>
                                        </button>


                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
            <div className="ttl-bad text-end text-light text-end">
                Total time saved = <span id="bad-hours">{ttlBadHours}</span> hr
            </div>
        </div>
    )
}
