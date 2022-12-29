import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import './navbar.css'

export default function NavBarRouter() {
    return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm bg-dark px-3 py-1">
        <a className="navbar-brand mx-1" href=" ">
          <img src="./logo192.png" height="32" alt=""/>
        </a>
        <div className="navbar-brand text-info">React</div>
        <ul className="navbar-nav nav-pills mx-4">
          <li className="nav-item mx-2">
            <NavLink to="/" className="nav-link" exact={true}>Home</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="/products" className="nav-link">Products</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="/member" className="nav-link">Member</NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
      <div className="text-center m-3">
        <Route path="/" exact={true} render={
          () => { return (<h3 class="lead">Home</h3>) }
        }/>
        <Route path="/products" exact={true} render={
          () => { return (<h3 class="lead">Products</h3>) }
        }/>
        <Route path="/member" exact={true} render={
          () => { return (<h3 class="lead">Member</h3>) }
        }/>
        <Route path="/contact" exact={true} render={
          () => { return (<h3 class="lead">Contact Us</h3>) }
        }/>
      </div>
    </BrowserRouter>

    )
}