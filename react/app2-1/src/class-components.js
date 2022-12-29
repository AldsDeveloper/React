import React, {Component} from 'react'

//มีคลาสเดียว จึงสามารถส่งออกแบบ default ได้
export default class Calendar extends Component {
    getDate() {
        const dayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
        const monthNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
        'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยนยน', 'ตุลาคม',
        'พฤศจิกายน', 'ธันวาคม']

        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear() + 543
        return `วัน${weekDay} ที่ ${day} ${month} ${year}`
    }

    render() {
        return <div>{this.getDate()}</div>
    }

    componentDidMount() {
        //
    }
}