
import React from 'react'

export default function MsgBox2(props) {

    const divStyle = {
        margin: '10px',
        padding: '5px',
        color: props.color,
        backgroundColor: props.bgColor,
        fontSize: props.fontSize,
        border: props.border
    }
        
    return <div style={divStyle}>{props.text}</div>  
    
}