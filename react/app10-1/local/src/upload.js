import React from 'react'

export default function Upload() {
    let [imgSrc, setImgSrc] = React.useState('')
    let [descr, setDescr] = React.useState('')

    const form = React.useRef()
    const file = React.useRef()

    const onSubmitForm = (event) => {
        event.preventDefault()
        //สมมติว่า ต้องการจำกัดขนาดไฟล์ไม่เกิน 100 KB
        const maxSize = 100
        if (file.current.files[0].size > maxSize * 1024) {
            alert(`ขนาดของไฟล์ต้องไม่เกิน ${maxSize} KB`)
            return
        }

        const formData = new FormData(form.current)
        fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            //หากจะ reset form ต้องทำก่อนที่จะเปลี่ยนค่า state
            form.current.reset()
            setImgSrc(result.imgSrc)
            setDescr(result.descr)
        })
        .catch(err => alert(err))
    }

    return (
        <div style={{margin: '30px'}}>
            <form onSubmit={onSubmitForm} ref={form}>
                <label>รูปภาพ</label><br/>
                <input type="file" name="image" accept="image/*" ref={file}/>
                <br/><br/>
                <label>คำอธิบายเกี่ยวกับภาพ</label><br/>
                <textarea name="description" cols="30" rows="3"></textarea>
                <br/><br/>
                <button>ส่งข้อมูล</button>
            </form>
            <br/><br/>

            {/* ตำแหน่งของภาพ ต้องระบุ URL แบบเต็ม */}
            <img src={'http://localhost:8000/' + imgSrc} alt="" 
                style={{maxWidth: '200px'}}/>
            <br/>
            <div>{descr}</div>
        </div>
    )
}