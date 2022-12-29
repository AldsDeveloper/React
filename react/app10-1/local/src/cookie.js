import React from 'react'
import './style.css'

export default function Cookie() {
    let [email, setEmail] = React.useState('')
    let [password, setPassword] = React.useState('')
    
    const form = React.createRef()
    const checkbox = React.createRef()

    //เมื่อแสดงผลขั้นตอนการเข้าสู่ระบบครั้งแรก
    //ให้เชื่อมต่อไปยังเซิร์ฟเวอร์เพื่อตรวจสอบว่า
    //ได้จัดเก็บ Email และ Password ในแบบคุกกี้ไว้หรือไม่

    const onEffect = () => {
        fetch('/api/cookie/get')
        .then(response => response.json())
        .then(result => {
            //เมื่อข้อมูลถูกส่งกลับมา ให้อัปเดตค่าใน state
            //เพื่อให้ปรากฏผลที่ช่องอินพุต
            //แต่ถ้าไม่ได้เก็บค่าไว้ในคุกกี้ ก็จะได้เพียงค่าว่างๆ
            checkbox.current.checked = result.save
            setEmail(result.email)
            setPassword(result.password)
        })
        .catch(err => alert(err))        
    }
    
    React.useEffect(() => {
        onEffect()
        //eslint-disable-next-line
    }, [])

    //เมื่อส่งข้อมูลจากฟอร์มออกไป
    const onSubmitForm = (event) => {
        event.preventDefault()

        const fd = new FormData(form.current)
        const fe = Object.fromEntries(fd.entries())
        fetch('/api/cookie/set', {
            method: 'POST',
            body: JSON.stringify(fe),
            headers: {'Content-Type':'application/json'}
        })
        .then(response => response.text())
        .then(result => alert(result))
        .catch(err => alert(err))
    }

    return (
        <div style={{margin: '30px'}}>
            <form onSubmit={onSubmitForm} ref={form}>
                <input type="email" name="email" defaultValue={email} placeholder="Email (Login)"/><br/>
                <input type="password" name="password" defaultValue={password} placeholder="Password"/><br/>
                <input type="checkbox" name="save" ref={checkbox}/>&nbsp;บันทึกข้อมูลไว้ในเครื่องนี้
                {/* defaultChecked ใช้ไม่ได้ผล */}
                <br/><br/>
                <button>ส่งข้อมูล</button>
            </form>
        </div>
    )
}