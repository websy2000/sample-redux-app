import React, { useState, useEffect } from 'react';
import LayoutComponent from "../components/layout";

import { useDispatch } from 'react-redux';
import { getUserProfileData } from "../redux/actions/loginAction";
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirectToProductPage = () => {
        navigate(`/products`);
    }



    useEffect(() => {
        dispatch(getUserProfileData(1))
    }, []);

    return (
        <LayoutComponent>
            <h1 className='page_title'>Welcome to Ecommerce app</h1>
            <button type="button" className='view_btn' onClick={redirectToProductPage}>View our products</button>
        </LayoutComponent>
    )
}


export default HomePage;