import React, {Component} from 'react'

export class Alert extends Component {
    constructor(props) {
        super(props)
        this.divAlert = React.createRef()
    }

    hideAlert = () => {
        this.divAlert.current.style.display = 'none'
    }

    render() {
        setTimeout(this.hideAlert, this.props.time)

        const divStyle = {
            width: '300px',
            backgroundColor: '#ffc',
            border: 'solid 1px black',
            textAlign: 'center',
            margin: '5px auto',
            padding: '5px',
            fontSize: 'small'
        }

        return (   
            <div ref={this.divAlert} style={divStyle}>
                {this.props.msg}
            </div>
        )
    }
}