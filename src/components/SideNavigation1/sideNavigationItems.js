import React from 'react'
import Navitem from './Navitem';
import './sideNavigationItems.css';

function sideNavigationItems(props) {
    return (
        <div>
            <ul>
                <Navitem link='/' exact>Dashboard</Navitem>
                <Navitem link='/login'>Login</Navitem>
                <Navitem link='/register'>Register</Navitem>
            </ul>
        </div>
    )
}

export default sideNavigationItems
