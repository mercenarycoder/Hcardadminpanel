import React from 'react';

import './Button.css';

const button = (props) => (
    <div className='container'>
    <button
        disabled={props.disabled}
        className='btn'
        onClick={props.clicked}>{props.children}</button>
</div>
);

export default button;