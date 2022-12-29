import React from 'react'

export default function Table() {
    return (
        <div className="mt-3 mx-auto" style={{width:'450px'}}>
            <table className="table table-striped table-borderless table-sm">
            <thead className="table-dark">
                <tr>
                    <th>#</th><th>Product Name</th><th>Price</th><th>Color</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td><td>JavaScript</td><td>300</td><td>Yellow</td>
                </tr>
                <tr>
                    <td>2</td><td>React</td><td>200</td><td>BlueSky</td>
                </tr>
                <tr>
                    <td>3</td><td>React Native</td><td>250</td><td>BlueSky</td>
                </tr>
                <tr>
                    <td>4</td><td>Node.js</td><td>400</td><td>Green</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}