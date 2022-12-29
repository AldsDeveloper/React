import React from 'react'
//import axios from 'axios'

export default function FormSearch() {
    const form = React.createRef()
    const textKw = React.createRef()
    const sp = React.createRef()

    const onSubmitForm = (event) => {
        event.preventDefault()
        
        let params = new URLSearchParams()
        params.append('kw', textKw.current.value)
        let url = '/api/search?' + params
        //fetch(url, { method: 'GET'})
        fetch(url)
        .then(res => res.text())
        .then(data => alert(data))
        .catch(err => alert(err))
       
        /*
        const fd = new FormData(form.current)
        const formObj = Object.fromEntries(fd.entries())
        fetch('/api/search', {
            method: 'POST',
            body: JSON.stringify(formObj), 
            headers: {'content-type':'application/json'}
        })
        .then(res => res.text())
        .then(data => {sp.current.innerHTML = data})
        .catch(err => alert(err))
        */

        /*
        let p = new URLSearchParams()
        p.append('kw', textKw.current.value)
        axios({
            url: '/api/search',
            method: 'GET',
            params: p
        })
        .then(response => {sp.current.innerHTML = response.data})
        .catch(err => alert(err))
        */
        /*
        const fd = new FormData(form.current)
        const formObj = Object.fromEntries(fd.entries())
        axios({
            url: '/api/search',
            method: 'POST',
            data: JSON.stringify(formObj),
            headers: {"Content-Type":"application/json"}
        })
        .then(response => {sp.current.innerHTML = response.data})
        .catch(err => alert(err))
        */
    }

    return (
        <div>
        <form ref={form} onSubmit={onSubmitForm}>
            <input type="text" id="kw" name="kw" placeholder="Search for" ref={textKw}/>
            <button>Search</button>
        </form>
        <br/>
        <span ref={sp}></span>
        </div>
    )
}