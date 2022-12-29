import React from 'react'
import './navbar.css'

export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-sm bg-dark px-3 py-0">
            <a className="navbar-brand" href=" ">
            <img src="./logo192.png" height="32" alt=""/>
            </a>
            <span className="navbar-brand text-info">React</span>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href=" ">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href=" ">Products</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href=" ">Member</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=" " data-bs-toggle="dropdown">
                    JavaScript
                </a>
                <div className="dropdown-menu bg-light">
                <a className="dropdown-item" href=" ">React</a>
                <a className="dropdown-item" href=" ">Angular</a>
                <a className="dropdown-item" href=" ">Vue</a>
                </div>
            </li>
            </ul>
        </nav>
    )

}
