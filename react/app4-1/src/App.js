import React from 'react'
import RefsClass from './refs-class'
import RefsFunc from './refs-func'
import RefsArray from './refs-array'
import Cart from './state-class'
import CartTable from './cart-table'
import MessageBox from './state-func'
import EffectFunc from './effect-func'
import EffectClass from './effect-class'
import { userContext } from './context'
import Header from './context-header'
import Content from './context-content'
import Header2 from './context-header2'
import Content2 from './context-content2'

export default function App() {
	/* 	
	การทดสอบแต่ละหัวข้อในหนังสือ 
	จะอยู่ใน comment บล็อกเดียวกัน
	ดังนั้น หากต้องการทดสอบเรื่องใด 
	ก็ให้นำ comment ของบล็อกนั้นออกไป
	แล้วไปทำ comment ในบล็อกเดิมแทน
	*/

	//return <RefsClass />

	//return <RefsFunc/>

	//return <RefsArray/>

	//return <Cart/>

	//return <CartTable/>

	//return <MessageBox/>

	//return <EffectFunc/>

	//return <EffectClass/>

	/*
	return (
		<userContext.Provider value={'Tom Jerry'}>
			<Header/>
			<Content/>
		</userContext.Provider>
	)
	*/

	
	let [user, setUser] = React.useState('')
	return (
		<userContext.Provider value={[user, setUser]}>
			<Header2/>
			<Content2/>
		</userContext.Provider>
	)
	
}
