import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import logo from './assets/logo.png'
import magnifying from './assets/magnifying.png'
import cart from './assets/cart.png'
import group from './assets/Group.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

               {/*SideBar */}
                <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    {/*header */}
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">LUCKY SHRUB</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    {/*body */}
                    <div className="offcanvas-body ">
                        <ul className="navbar-nav justify-content-center align-item-center flex-grow-1">
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Shop</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Services</a>
                            </li>
                            <li className="nav-item  ">
                                <a className="nav-link" href="/">Blog</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>
                        <div className='nav-end d-flex justify-content-center align-item-center gap-1 mt-2 px-2'>
                            <a href="/"><img src={magnifying} alt="magnifying-glasses" /></a>
                            <a href="/"><img src={cart} alt="cart" /></a>
                            <a href="/"><img src={group} alt="group" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


{/*<nav className="navbar navbar-expand-lg">
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
        </nav> */}