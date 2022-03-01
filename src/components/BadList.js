import React from 'react'

export const BadList = () => {
    return (
        <div class="col-md-6 mb-5">
            <h2 class="text-center">Bad list</h2>
            <hr />
            <div class="list-items">
                <table class="table table-striped w-100">
                    <tbody id="bad-list"></tbody>
                </table>
            </div>
            <div class="ttl-bad text-end text-light text-end">
                Total time saved = <span id="bad-hours">0</span> hr
            </div>
        </div>
    )
}
