import React from 'react'

export default function Button() {
    return (
        <div style={{width:'400px', margin:'10px auto'}}>
            <button className="btn btn-primary">
                Normal Button
            </button>
            <br/><br/>
            <input type="button" value="Large Button" 
                className="btn btn-lg btn-info"/>
            <br/><br/>
            <a href=" " className="btn btn-sm btn-danger">
                Small Button
            </a>
        </div>
    )
}