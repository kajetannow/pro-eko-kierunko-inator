import React from 'react';
import Nav from "./nav/nav.js"

import './../styles/global.css'

export default function Layout( props ) {
    return (
        <div>
            <Nav>
                Nawigacja
            </Nav> 
                { props.children }
        </div>
    )
}