import React from 'react';
import PropTypes from 'prop-types';
import './Glabel.css';

const Glabel = ({ label, onChenge, name, value, type, placeholder, error }) => {

    const mode = error ? 'error': '';

  return (
      <div className='glabel'>
        <label htmlFor={name}>{label}</label>
        <input 
            type={type} 
            id={name} 
            placeholder={placeholder} 
            onChange={onChenge} 
            value={value} 
            className={mode}
        />
      </div>
  );
};

// validando el tipo de datos de los props recibidos
Glabel.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['text','date', 'gmail', 'password', 'number']).isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.bool,
}

// agregando datos por defecto a los props
Glabel.defaultProps = {
    type: 'text',
    placeholder: 'Ingrese un texto',
    error: false,
}

export default Glabel;
