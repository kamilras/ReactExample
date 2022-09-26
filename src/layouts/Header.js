import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Img from '../components/Img'

import '../styles/Header.css'

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';


const Header = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Img img={img1} alt={"ulica w mieście"} />} />
                <Route path="/products" element={<Img img={img2} alt={"ulica w mieście"} />} />
                <Route path="/contact" element={<Img img={img3} alt={"ulica w mieście"} />} />
                <Route path="/admin" element={<Img img={img3} alt={"ulica w mieście"} />} />
                <Route path="/admin" element={<Img img={img3} alt={"ulica w mieście"} />} />
                {/* <Route path="/" render={() => (<img src={img1} alt={"ulica w mieście"} />)} /> */}
            </Routes>
        </>
    );
}

export default Header;