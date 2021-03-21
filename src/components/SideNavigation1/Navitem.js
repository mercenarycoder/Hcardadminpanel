import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navitem.css';

function Navitem(props) {
    return (
        <li>
            <NavLink 
                to={props.link}
                exact={props.exact}
                activeClassName='active'>{props.children}</NavLink>
        </li>
    )
}

export default Navitem
