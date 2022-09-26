import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css"

const list = [
    { name: "start", path: "/", end: true },
    { name: "produkty", path: "/products" },
    { name: "kontakt", path: "/contact" },
    { name: "panel admina", path: "/admin" },

]

const Navigation = (props) => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} end={item.end ? true : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className='main'>
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;