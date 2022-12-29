/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
//import axios from 'axios'

function FuncComponent() {
    const [data, setData] = React.useState(null)
    
    React.useEffect(() => {
      fetch('/api')
        .then(res => res.text())
        .then(data => setData(data))
    })
    
    /*
    React.useEffect(() => {
        axios({
            url: '/api',
            method: 'get'
        })
        .then(res => {
            setData(res.data)
        })
        .catch(err => { alert(err) })
    })
    */
    return (
        <p dangerouslySetInnerHTML={{__html: data}}/>
    )
}

class ClassComponent extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        
        fetch('/api')
        .then(res => res.text())
        .then(dat => this.setState({data: dat}))
        
        /*
        axios({
            url: '/api',
            method: 'get'
        })
        .then(res => {
            this.setState({data: res.data})
        })
        .catch(err => { alert(err) })
       */ 
    }
    
    render() {
        return (
            <p dangerouslySetInnerHTML={{__html: this.state.data}}/>
        )
    }
}

export {FuncComponent, ClassComponent}