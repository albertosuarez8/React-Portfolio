import React from 'react'
import Navigation from './Navigation';

function Header(props) {
    return (
        <Navigation 
        handleTitle={props.handleTitle}
        />
    );
}

export default Header;