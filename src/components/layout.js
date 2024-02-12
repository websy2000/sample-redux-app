import React from 'react';
import HeaderComponent from './header';


const LayoutComponent = ({children}) => {
    return(
        <>
        <HeaderComponent />
        {children}
        </>
    )
}


export default LayoutComponent;