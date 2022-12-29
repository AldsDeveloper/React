import React from 'react'
import './form-style.css'

export default function DBCreate() {
	const form = React.useRef()
	
	const onSubmitForm = (event) => {
		event.preventDefault()

		const fd = new FormData(form.current)
		const fe = Object.fromEntries(fd.entries())
		
		fetch('/api/db/create', {
			method: 'POST',
			body: JSON.stringify(fe),
			headers: {'Content-Type':'application/json'}
		})
		.then(response => response.text())
		.then(result => {
			if (result === 'true') {	
				form.current.reset()
				alert('ข้อมูลถูกจัดเก็บแล้ว')
			} else {
				alert('เกิดข้อผิดพลาด ข้อมูลไม่ถูกบันทึก')
			}
		})
		.catch(err => alert(err))
	}

    return (
    <form id="form-create" onSubmit={onSubmitForm} ref={form}>
		<label>ชื่อสินค้า</label>
		<input type="text" name="name" required/><br/>
		<label>ราคา</label>
		<input type="number" name="price" min="0" required/><br/>
		<label style={{float: 'left'}}>รายละเอียดสินค้า</label>
		<textarea name="detail" cols="30" rows="3"></textarea><br/>
		<label>วันที่เพิ่มสินค้า</label>
		<input type="date" name="date_added" required/>
		<br/><br/>
		<button>ตกลง</button>
		<br/><br/>
		<a href="/db">หน้าหลัก</a>
	</form>
    )
}
