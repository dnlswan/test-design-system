import React from 'react';

const Button = (props) => {
    
    return (
        <button 
            className="dribbble-button" 
            style={{
                backgroundColor: 'white',
                color: 'black',
                fontFamily: 'Comic Sans MS',
                border: 'none',
                padding: '16px',
                borderRadius: '8px'

            }}
        >
            {props.label}
        </button>
    )

}

export default Button;