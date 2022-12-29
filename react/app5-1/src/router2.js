
import React from 'react'
import {BrowserRouter, NavLink} from 'react-router-dom'
import './navlink.css'

export default function Router2() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink to="/" className="menu" activeClassName="active_menu" activeStyle={{fontWeight:' bold'}} exact={true}>Home</NavLink> -&nbsp; 
                <NavLink to="/products" className="menu" activeClassName="active_menu">Products</NavLink> -&nbsp;
                <NavLink to="/member" className="menu" activeClassName="active_menu">Member</NavLink> -&nbsp;
                <NavLink to="/contact" className="menu" activeClassName="active_menu">Contact Us</NavLink>
            </nav>
        </BrowserRouter>
    )
}