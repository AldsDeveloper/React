import React from 'react'
import './index.css'
import reactlogo from './logo.svg'   // => src/logo.svg

function App() {
	/* 	
	การทดสอบแต่ละหัวข้อในหนังสือ 
	จะอยู่ใน comment บล็อกเดียวกัน
	ดังนั้น หากต้องการทดสอบเรื่องใด 
	ก็ให้นำ comment ของบล็อกนั้นออกไป
	แล้วไปทำ comment ในบล็อกเดิมแทน
	*/

	return <h3>Hello Word! <br/>สวัสดีชาวโลก</h3>
	
	/*
	let r = 'React'
	let rn = 'React Native'
	const el = (
		<div>
			Create Web & Mobile Apps<br/>
			with {r} & {rn}
		</div>
	)
	return el
	*/

	/*
	return (
		<table border="1">
			<tr><th>Product</th><th>Price</th></tr>
			<tr><td>React</td><td>320</td></tr>
			<tr><td>React Native</td><td>340</td></tr>
		</table>
	)
	*/

	/*
	const divStyle = {
		color: 'red',
		backgroundColor: 'powderblue',		
		fontSize: 'larger',
		padding: '3px',
	}
	return <div style={divStyle}>Hello React</div>
	*/

	/*
	let colors = ['red', 'green', 'blue', 'yellow']
	let list = colors.map(c => <li>{c}</li>)		//แทรกค่าแบบ JSX
	return <ul>{list}</ul>
	*/

	/*
	let colors = ['red', 'green', 'blue', 'yellow']
	return (
		<ul>
			{colors.map(c => <li>{c}</li>)}
		</ul> 
	)
	*/
	
	/*
	return (
		<ul>
			{colors.map(c => <li>{c}</li>)}
		</ul>
	)
	*/
		
    //return <img src="./logo192.png" alt=""/>

    //return <img src={"./logo192.png"} alt=""/>

    //return <img src={(process.env.PUBLIC_URL + "/logo192.png")} alt=""/>

    //return <img src={reactlogo} width="10%" alt=""/>
}

export default App
