import React from 'react';
import Nav from "./nav/nav.js"

import './../styles/global.css'

export default function Result( props ) {
    let sortable = []
    for (var el in props.points) {
        sortable.push([el, props.points[el]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    console.log(sortable)
    return (
        <div>
            <h2>Wygrany kierunek to...</h2>
            {sortable &&
                <>
                <h1 className="h-font">{sortable[0][0]}</h1>
                <h2>Pozostałe kierunki to:</h2>
                {sortable.map((el, i)=><h3 key={i} className="h-font">{el[0]}</h3>)}
                </>
            }
            
        </div>
    )
}