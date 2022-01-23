import React from 'react';
import PropTypes from 'prop-types';
import './Gbutton.css';

const Gbutton = ({ color, onClick, label, round, type, disabled }) => {
    
    const mode = round ? 'round': ''
    
    return ( 
        <button 
            type={ type }
            onClick={ onClick } 
            className={`${color} ${mode}`} 
            disabled={ disabled }
        >
            { label}
        </button> 
    )
}


// validando los props recibidos
Gbutton.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
        'primary', 
        'secondary', 
        'info',
        'warning',
        'danger',
        'success',
        'dark',
        'light'
    ]),
    round: PropTypes.bool ,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button','submit']),
    disabled: PropTypes.bool,
}

// agregando props por defecto
Gbutton.defaultProps = {
    color: 'primary',
    onClick: undefined,
    round: false,
    type: 'button',
    disabled: false,
}

export default Gbutton


