import { Link } from 'gatsby';
import React, { Component } from 'react';


class Nav extends Component {
    render() {
        return (
            <nav>
                <h1 className='h-font'><Link to="/">PUT:ECO</Link></h1>
                <h1 className='h-font'>PRO-EKO-KIERUNKO-INATOR</h1>
            </nav>
        );
    }
}

export default Nav;