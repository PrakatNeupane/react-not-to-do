import React from 'react'

export const TotalHours = ({ total }) => {
    return (
        <div class="row mt-2 pb-5 fs-3 fw-bolder text-warning">
            <div class="col text-center">
                Total time allocated this week = <span id="totalHours">{total}</span> hr
            </div>
        </div>
    )
}
