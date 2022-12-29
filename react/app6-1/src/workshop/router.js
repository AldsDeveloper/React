
import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import Products from './products'
import ProductDetail from './product-detail'
import Cart from './cart'
import './navlink.css'
import './route.css'

export default function WorkshopRouter() {
    return (
      <BrowserRouter>
            <nav className="navbar navbar-expand-sm justify-content-center bg-dark px-3 py-1">
              <div className="navbar-brand mx-2">
                <img src="../logo192.png" height="32" alt=""/>
              </div>
              <div className="navbar-brand text-info">React Store</div>
              <ul className="navbar-nav nav-pills mx-4">
                <li className="nav-item mx-2">
                  <NavLink to="/" className="nav-link" exact={true}>Home</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/products" className="nav-link" exact={true}>Products</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/member" className="nav-link">Member</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                </li>
                <li className="nav-item ml-5">
                  <NavLink to="/cart" className="nav-link">Cart</NavLink>
                </li>
              </ul>
            </nav>
            <div>
                <Route path="/" exact={true} render={
                    () => {
                        return (
                        <p style={{textAlign:'center'}}>
                            <h3 className="lead text-success">ยินดีต้อนรับสู่ React Store</h3>
                            รายชื่อ <a href="/products">สินค้า</a> ที่เรามีจำหน่าย<br/>
                            แต่ท่านต้องเป็น <a href="/member">สมาชิก</a> จึงจะสั่งซื้อได้<br/>
                            หากมีข้อสงสัย กรุณา <a href="/contact">ติดต่อเรา</a>
                        </p>
                        )
                    }
                }/>

                <Route path="/products" exact={true} component={Products}/>
                
                <Route path="/product-detail/:id" exact={true} component={ProductDetail}/>

                <Route path="/member" exact={true} render={
                    () => {
                        return (
                            <div style={{textAlign:'center'}}>Member Page (Component)</div>
                        )
                    }
                }/>

                <Route path="/contact" exact={true} render={
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