import React from 'react';
import {NavLink} from 'react-router-dom';

import  './Input.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = ['inputE'];

    if (props.invalid && props.shouldValidate && props.touched) {
        // inputClasses.push('');
    }
    if(props.elementConfig.type==='email')
    {
        inputClasses.push('input-email');
    }
    if(props.elementConfig.type==='password')
    {
        inputClasses.push('input-password');
    }
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        case ('file'):
            inputElement=(
                <input className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed} 
                    {...props.elementConfig}
                    />
                    );
            break;
        case ('checkbox'):
            inputElement=(
                <div>
                <input 
                    className='input-toggle'
                    value={props.value}
                    onChange={props.changed}
                    {...props.elementConfig} 
                /><span className="info">Do you agree to the <NavLink to="#">terms and conditions?</NavLink></span>
                </div>
            );                
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className='container'>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;