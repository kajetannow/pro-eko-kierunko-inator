import React, { Component } from 'react';
import Nav from "./nav/nav.js"

import * as pageStructureStyle from "./pageStructureStyle.module.css"

import Questions from "./questions.js"

export default function pageStructure( props ) {
    return (
        <div className={pageStructureStyle.background}>
            <Nav>
                Nawigacja
            </Nav> 
            <Questions question={props.question} anwsers={props.anwsers}>
                { props.children }
            </Questions>
        </div>
    )
}