import React from 'react'

function Calculator(props) {
	let n1 = props.match.params.n1
	let n2 = props.match.params.n2
	let op = props.match.params.op

	return (
        <div>
            {n1} {op} {n2} = {eval(`${n1} ${op} ${n2}`)}
        </div> 
    )
}

class Map extends React.Component {
	constructor(props) {
        super(props)
		this.mapType = props.match.params.type || 'satellite'
		this.zoom = props.match.params.zoom || 16
	}
	render() { 
        return (
            <div>
                {this.mapType} : {this.zoom}
            </div>
        )
    }
}

export {Calculator, Map}

