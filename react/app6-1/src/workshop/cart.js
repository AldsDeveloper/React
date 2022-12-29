
import React from 'react'
import {data} from './data'
import Cookies from 'universal-cookie'  //npm install univeral-cookie
import './products.css'

export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        const id = (new URLSearchParams(props.location.search)).get('id')
        this.cookies = new Cookies()
        if (id && data[id]) {
            this.cookies.set('p' + id, id)
        }
        this.state = {
            data: this.cookies
        }
    }

    render() {
        let allCookies = this.cookies.getAll()

        if (Object.entries(allCookies).length === 0) {
            return (
                <h4 className="lead text-center text-danger">
                    ไม่มีสินค้าในรถเข็น
                </h4>
            )
        } else {
            return (
                <table className="table table-striped table-borderless mt-3 mx-auto">
                <caption className="text-center text-success caption-top">รายการสินค้าในรถเข็น</caption>
                <thead className="table-dark">
                    <tr><th>ชื่อ</th><th>ราคา</th><th>&nbsp;</th></tr>
                </thead>
                <tbody>
                    {  
                        Object.entries(allCookies).map(ck => {  
                            let id = ck[1]
                            return (
                            <tr>
                                <td>
                                    <img src={'/images/' + data[id][0]} alt=""/>
                                    <a href={'/product-detail/' + id}>{data[id][1]}</a>
                                </td>
                                <td>{data[id][2]}</td>
                                <td><button className="btn btn-sm btn-danger" onClick={() => this.removeCookie(id)}>ลบ</button></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
                </table>
            )    
        } 
    }

    removeCookie(id) {
        if (window.confirm('ยืนยันการลบสินค้าออกจากรถเข็น?')) {
            this.cookies.remove('p' + id)
            this.setState({data: this.cookies})
        }
    }

}