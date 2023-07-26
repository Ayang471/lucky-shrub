import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import logo from './assets/logo.png'
import magnifying from './assets/magnifying.png'
import cart from './assets/cart.png'
import group from './assets/Group.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to="/" className="navbar-brand" ><img src={logo} alt="logo" /></Link>
                <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center align-items-center" id="mynavbar">
                    <div className="navbar-nav justify-content-end align-items-center" >
                        <Link to="/" className="nav-link">Home</Link>

                        <Link to="/" className="nav-link">Shop</Link>

                        <Link to="/" className="nav-link">Services</Link>

                        <Link to="/" className="nav-link">Blog</Link>

                        <Link to="/" className="nav-link">About</Link>
                    </div>
                </div>
                <div className='nav-end justify-content-end align-items-center'>
                    <a href="/"><img src={magnifying} alt="magnifying-glasses" /></a>
                    <a href="/"><img src={cart} alt="cart" /></a>
                    <a href="/"><img src={group} alt="group" /></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


