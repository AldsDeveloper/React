import React from 'react'

export default function FormSearch() {
    const textKw = React.useRef()
    const btOk = React.createRef()

    const onChangeKw = () => {
        if (textKw.current.value.trim() !== '') {
            btOk.current.disabled = false
        } else {
            btOk.current.disabled = true
        }
    }

    return (
        <div style={{margin:'30px'}}>
		<form>
			<input type="text" name="kw" placeholder="ค้นหา" 
                ref={textKw} onInput={onChangeKw}/>&nbsp;

			<button ref={btOk} disabled>ตกลง</button>
		</form>
        </div>
    )
}

/*
class FormPerson extends React.Component {
    constructor(props) {
        super(props)
        this.firstname = React.createRef()
        this.lastname = React.createRef()
        this.form = React.createRef()       //ถ้าต้องการอ้างถึงฟอร์ม 
    }

    render() {
        return (
            <form ref={this.form}>
                <input type="text" name="firstname" ref={this.firstname}/><br/>
                <input type="text" name="lastname" ref={this.lastname}/><br/>
                <button>OK</button>
            </form>
        )
    }
}

export {FormSearch, FormPerson}
*/