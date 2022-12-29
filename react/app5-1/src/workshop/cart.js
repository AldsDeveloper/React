
import React from 'react'
import {data} from './data'
import Cookies from 'universal-cookie'  //npm install univeral-cookie

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
                <h4 style={{color:'red',textAlign:'center'}}>
                    ไม่มีสินค้าในรถเข็น
                </h4>
            )
        } else {
            return (
                <table>
                    <caption>รายการสินค้าในรถเข็น</caption>
                    <tr><th>ชื่อ</th><th>ราคา</th><th>&nbsp;</th></tr>
                    {  
                        Object.entries(allCookies).map(ck => {  
                            let id = ck[1]
                            return (
                            <tr>
                                <td>
                                    <img src={'/images/' + data[id][0]} alt=""/>
                                    <a href={'/products/detail/' + id}>{data[id][1]}</a>
                                </td>
                                <td>{data[id][2]}</td>
                                <td><button onClick={() => this.removeCookie(id)}>ลบ</button></td>
                            </tr>
                            )
                        })
                    }
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