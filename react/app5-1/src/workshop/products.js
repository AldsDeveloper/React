import React from 'react'
import './products.css'
import {data} from './data'

export default class Products extends React.Component {
    render() {
        return (
            <table>
                <caption>รายการสินค้า</caption>
                <tr><th>ชื่อ</th><th>ราคา</th><th>&nbsp;</th></tr>
                {  
                    data.map((d, i) => {     
                        return (
                        <tr>
                            <td>
                                <img src={'/images/' + d[0]} alt=""/>
                                <a href={'/products/detail/' + i}>{d[1]}</a>
                            </td>
                            <td>{d[2]}</td>
                            <td><button onClick={() => this.addCart(i)}>หยิบใส่รถเข็น</button></td>
                        </tr>
                        )
                    })
                }
            </table>
        )
    }

    addCart(id) {
        window.location.href = '/cart?id=' + id
    }
}