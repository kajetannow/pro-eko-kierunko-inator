import React from 'react';
import Nav from "./nav/nav.js"
import { Helmet } from "react-helmet"

import './../styles/global.css'

export default function Layout( props ) {
    return (
        <div>
            <Helmet>
                <title>PRO-EKO-KIERUNKO-INATOR</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Nav>
                Nawigacja
            </Nav> 
            <main>
                { props.children }
            </main>
            <footer>
                <small>2022 &copy; PUT:eco</small>
            </footer>
        </div>
    )
}