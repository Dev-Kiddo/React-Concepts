import React from 'react';
import { BrowserRouter, NavLink, Link } from 'react-router-dom';
export const NavBar = () =>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link className="index-link" to="/" >Index</Link>
                </li>
                <li>
                <Link className="home-link" to="/home" >Home</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}