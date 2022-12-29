/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './style.css'
import SessionSignedIn from './session-signedin'

export default function Session() {
    let [signedIn, setSignedIn] = React.useState(false)
    const form = React.useRef()

    //เมื่อแสดงผล เราจะเชื่อมต่อไปยังเซิร์ฟเวอร์ 
    //เพื่อตรวจสอบจากเซสชันว่าได้เข้าสู่ระบบหรือยัง
    React.useEffect(() => {
        fetch('/api/session/get')
        .then(response => response.json())
        .then(result => setSignedIn(result.signedIn))
        .catch(err => alert(err))
    }, [])  

    //เมือส่งข้อมูลจากฟอร์มออกไป
    const onSubmitForm = (event) => {
        event.preventDefault()

        const fd = new FormData(form.current)
        const fe = Object.fromEntries(fd.entries())
        fetch('/api/session/set', {
            method: 'POST',
            body: JSON.stringify(fe),
            headers: {'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(result => {
            if (result.signedIn) {
                setSignedIn(result.signedIn)
            } else {
                alert('Email หรือ Password ไม่ถูกต้อง')
            }
        })            
        .catch(err => alert(err))
    }

    //ถ้ายังไม่เข้าสู่ระบบ ให้แสดงฟอร์ม
    if (!signedIn) {
        return (
            <div style={{margin: '30px'}}>
                <form onSubmit={onSubmitForm} ref={form}>
                    <input type="email" name="email" placeholder="Email"/><br/>
                    <input type="password" name="password" placeholder="Password"/>
                    <br/><br/>
                    <button>ส่งข้อมูล</button>
                </form>
            </div>
        )        
    
    //ถ้าเข้าสู่ระบบแล้ว ให้แสดงคอมโพเนนต์ที่กำหนด
    } else {
        return <SessionSignedIn />
    }
}