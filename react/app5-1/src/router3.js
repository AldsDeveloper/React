
import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import './navlink.css'
import Products from './products'

export default function Router3() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink to="/" className="menu" activeClassName="active_menu" activeStyle={{fontWeight:' bold'}} exact={true}>Home</NavLink> -&nbsp; 
                <NavLink to="/products" className="menu" activeClassName="active_menu">Products</NavLink> -&nbsp;
                <NavLink to="/member" className="menu" activeClassName="active_menu">Member</NavLink> -&nbsp;
                <NavLink to="/contact" className="menu" activeClassName="active_menu">Contact Us</NavLink>
            </nav>

            <div style={{margin: '20px'}}>
                <Route path="/" exact={true} render={
                    () => {
                        return (
                        <p style={{textAlign:'center'}}>
                            <h3>ยินดีต้อนรับสู่ React Store</h3>
                            รายชื่อ <a href="/products">สินค้า</a> ที่เรามีจำหน่าย<br/>
                            แต่ท่านต้องเป็น <a href="/member">สมาชิก</a> จึงจะสั่งซื้อได้<br/>
                            หากมีข้อสงสัย กรุณา <a href="/contact">ติดต่อเรา</a>
                        </p>
                        )
                    }
                }/>

                <Route path="/products" component={Products}/>

                <Route path="/member" render={
                    () => {
                        return (
                            <div style={{textAlign:'center'}}>Member Page</div>
                        )
                    }
                }/>

                <Route path="/contact" render={
                    function() {
                        return (
                            <div style={{textAlign:'center'}}>Contact Page</div>
                        )
                    }
                }/>
            </div>
        </BrowserRouter>
    )
}