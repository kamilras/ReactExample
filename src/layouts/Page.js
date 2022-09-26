import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import ProductPage from '../pages/ProductPage';

const Page = (props) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
            <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
    );
}

export default Page;