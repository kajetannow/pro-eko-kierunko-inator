import React from 'react';
import Nav from "./nav/nav.js"

import './../styles/global.css'
import { Link } from 'gatsby';

export default function Result( props ) {
    let sortable = []
    for (var el in props.points) {
        sortable.push([el, props.points[el]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    let winners = []
        if(sortable && sortable[1]){
        let maxPoints = sortable[0][1]
        winners.push(sortable[0][0])
        let i=1
        while(i < sortable.length){
            if(sortable && sortable[i] && sortable[i][1]==maxPoints)
                winners.push(sortable[i][0])
            i++;
        }
    }
    return (
        <div className='result-container'>
            <h2><span className="h-font">PRO-EKO-KIERUNKO-INATOR</span> zadecydował. <br /> Najbardziej pasuje do Ciebie:</h2>
            {sortable &&
                <>
                <h1 className="h-font winners">{winners.join(", ")}</h1>
                <div className='all-options'>
                    <h2>Wszystkie polecane propozycje:</h2>
                    {sortable.map((el, i)=><h3 key={i} className="h-font">{el[0]}</h3>)}
                </div>
                </>
            }
            <Link to="/" className='btn'>Wróć do strony głównej</Link>
        </div>
    )
}