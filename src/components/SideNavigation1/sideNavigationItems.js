import React from 'react'
import Navitem from './Navitem';
import './sideNavigationItems.css';
import Button from '../Button/Button';

function sideNavigationItems(props) {
    return (
        <div>
            <ul>
                <Navitem link='/' exact>Dashboard</Navitem>
                <Navitem link='/login'>Login</Navitem>
                <Navitem link='/register'>Register</Navitem>
                <Navitem link='/logout'>Logout</Navitem>
            </ul>
        </div>
    )
}

export default sideNavigationItems
