import React, {Component} from 'react'
import './cart-table.css'

export default class CartTable extends Component {
    state = {
        data: [
            //[name, quantity]
            ['JavaScript', 5],
            ['React', 1], 
            ['React Native', 2], 
            ['Node.js', 2],
        ]
    }

    deleteItem = (index) => {
        if (window.confirm('ยืนยันการลบสินค้ารายการนี้?')) {
            this.state.data.splice(index, 1)
            this.setState(this.state.data)
        }
    }

    addItem = () => {
        let name = prompt('ชื่อสินค้า')
        if (name) {
            let quantity = parseInt(prompt('จำนวน'))
            if (quantity && quantity > 0) {
                let d = this.state.data
                let i = -1
                d.forEach((item, idx) => {
                    if (item[0] === name) {
                        i = idx
                    }
                })
                let a = [name, quantity]
                if (i === -1) {
                    d.push(a)
                } else {
                    d.splice(i, 1, a)
                }

                this.setState(d)   
            }
        }
    }

    render() {
        return (
            <table>
            <caption>
                รายการสินค้าในรถเข็น&nbsp;&nbsp;&nbsp;
                <button onClick={this.addItem}>เพิ่มสินค้า</button>
            </caption>
            <tr><th>ชื่อสินค้า</th><th>จำนวน</th><th>ลบ</th></tr>
            {
                this.state.data.map((row, index) => {
                    return (
                        <tr>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                            <td>
                                <button onClick={this.deleteItem.bind(this, index)}>
                                    ลบ
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
            </table>
        )
    }

}