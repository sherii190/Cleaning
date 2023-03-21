import React from 'react'
import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <>
            <header id="home">
                <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-lg-3 brand-item">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                        <i className="fa fa-bars" />
                                    </button>
                                    <li>
                                        <NavLink to="/" className="navbar-brand" >
                                            <img
                                                src="assets/img/logo-light.png"
                                                className="logo logo-display"
                                                alt="Logo"
                                            />
                                            <img
                                                src="assets/img/logo.png"
                                                className="logo logo-scrolled"
                                                alt="Logo"
                                            />
                                        </NavLink>
                                    </li>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="collapse navbar-collapse" id="navbar-menu">
                                    <ul className="nav navbar-nav" data-in="#" data-out="#">
                                    <li>
                                   
                                      <NavLink  style={({isActive})=>{return{color:isActive ? 'red':'white'}}}to="/">Home</NavLink>
                                     
                                     </li>
                                       
                                        <li>
                                        <NavLink style={({isActive})=>{return{color:isActive ? 'red':'white'}}}to="about">About Us</NavLink>
                                            
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                Services
                                            </a>
                                            <ul className="dropdown-menu">
                                                
                                                <li>
                                                <NavLink style={({isActive})=>{return{color:isActive ? 'red':'black'}}}to="house-cleaning">House Cleaning</NavLink>
                                                </li>
                                                <li>
                                                <NavLink style={({isActive})=>{return{color:isActive ? 'red':'black'}}}to="carpet">Carpet</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* /.navbar-collapse */}
                            {/* Start Atribute Navigation */}
                            <div className="col-lg-3">
                                <div className="attr-nav">
                                    <div className="call">
                                        <div className="icon">
                                            <img src="assets/img/icon/phone-call.png" alt="Phone" />
                                        </div>
                                        <div className="info">
                                            <span>Have any question?</span>
                                            <h5>(+46) 0764349184</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>

            </header>

        </>


    )
}

export default Header
