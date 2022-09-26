import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css"

const list = [
    { id: 1, name: "start", path: "/", end: true },
    { id: 2, name: "produkty", path: "/products" },
    { id: 3, name: "kontakt", path: "/contact" },
    { id: 4, name: "panel admina", path: "/admin" },

]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.id}>
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