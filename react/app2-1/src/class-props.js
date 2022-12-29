import React, { Component } from 'react'

export default class MsgBox extends Component {
    /*
    constructor(probs) {
        super(probs)
    }
    */
    render() {
        const divStyle = {
            margin: '10px',
            padding: '5px',
            color: this.props.color,
            backgroundColor: this.props.bgColor,
            fontSize: this.props.fontSize,
            border: this.props.border
        }

        return <div style={divStyle}>{this.props.text}</div>
    }
}