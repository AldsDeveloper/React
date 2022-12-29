
import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import './navlink.css'
import './route.css'
import Products from './products'
import ProductDetail from './product-detail'
import Cart from './cart'

export default function Router() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink to="/" className="menu" activeClassName="active_menu" exact={true}>Home</NavLink> -&nbsp; 
                <NavLink to="/products" className="menu" activeClassName="active_menu" exact={true}>Products</NavLink> -&nbsp;
                <NavLink to="/member" className="menu" activeClassName="active_menu">Member</NavLink> -&nbsp;
                <NavLink to="/contact" className="menu" activeClassName="active_menu">Contact Us</NavLink>&nbsp;&nbsp;-&nbsp;               
                <NavLink to="/cart" className="menu" activeClassName="active_menu">Cart</NavLink>
            </nav>
            <div>
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

                <Route path="/products" exact={true} component={Products}/>

                <Route path="/products/detail/:id" exact={true} component={ProductDetail}/>

                <Route path="/member" render={
                    () => {
                        return (
                            <div style={{textAlign:'center'}}>Member Page (Component)</div>
                        )
                    }
                }/>

                <Route path="/contact" render={
                    function() {
                        return (
                            <div style={{textAlign:'center'}}>Contact Page (Component)</div>
                        )
                    }
                }/>

                <Route path="/cart" exact={true} component={Cart}/>
            </div>
        </BrowserRouter>
    )
}