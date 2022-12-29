import React from 'react'

export default class EffectClass extends React.Component {
    state = {
        a: 10, b: 20
    }

    componentDidMount() {
        //alert(`a = ${this.state.a}, b = ${this.state.b}`)
    }

    componentDidUpdate() {
        alert(`a = ${this.state.a}, b = ${this.state.b}`)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({a: this.state.a + 1})}>Change A</button><br/>
                <button onClick={() => this.setState({b: this.state.b + 1})}>Change B</button>
            </div>
        )        
    }


        
        
}