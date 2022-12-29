import React from 'react'
import {data} from './data'
import './products.css'

export default class Products extends React.Component {
    render() {
        return (
            <table className="table table-striped table-borderless mt-3 mx-auto">
                <caption className="caption-top text-center">
                    <span className="fw-bold text-success">รายการสินค้า</span>&nbsp;
                    <span className="small text-muted">(คลิกชื่อสินค้า เพื่อดูรายละเอียด)</span>
                </caption>
                <thead className="table-dark">
                    <tr><th>ชื่อ</th><th>ราคา</th><th>&nbsp;</th></tr>
                </thead>
                <tbody>
                {  
                    data.map((d, i) => {     
                        return (
                        <tr>
                            <td>
                                <img src={'/images/' + d[0]} alt="" style={{height:'32px'}}/>
                                <a href={'/product-detail/' + i}>{d[1]}</a>
                            </td>
                            <td>{d[2]}</td>
                            <td><button className="btn btn-sm btn-primary" onClick={() => this.addCart(i)}>หยิบใส่รถเข็น</button></td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }

    addCart(id) {
        window.location.href = '/cart?id=' + id
    }
}