import React from 'react';
import css from './button.module.css';

const Button = (props) => {
    
    return (
        <button className={css.dribbbleButton}>
            {props.label}
        </button>
    )

}

export default Button;