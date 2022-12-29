import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import MsgBox from './class-props'
import MsgBox2 from './func-props'

function App() {
	/* 	
	การทดสอบแต่ละหัวข้อในหนังสือ 
	จะอยู่ใน comment บล็อกเดียวกัน
	ดังนั้น หากต้องการทดสอบเรื่องใด 
	ก็ให้นำ comment ของบล็อกนั้นออกไป
	แล้วไปทำ comment ในบล็อกเดิมแทน
	*/

	return (
		[<Header />, <Content />, <Footer />]
	)

	/*
	return (
		<>
			<Header/>
			<p style={{textAlign: 'center'}}><Calendar/></p>
			<Content/>
			<Footer/>
	  </>
	)
	*/

	/*
	return (
		<MsgBox 
			text="React & React Native" 
			color="blue" bgColor="#ccc" 
			fontSize="18pt" border="solid 1px black"
		/>
	)
	*/

	/*
	return (
		<MsgBox2 
			text="Using props in function component" 
			color="red" bgColor="#ccc" 
			fontSize="16pt" border="dotted 1px black"
		/>
	)
	*/
}

export default App
