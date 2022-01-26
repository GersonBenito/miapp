import React from 'react';
import PropTypes from 'prop-types';

const Gselect = (label, onChange, name, error, children) => {
    console.log(children);
    
    const mode = error ? 'error': '';

  return (
      <div>
        <label htmlFor={name}>{label}</label>
        <select name={name} onChange={onChange} className={mode} >
            {children}
        </select>
      </div>
  );
};

Gselect.propsTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    error: PropTypes.bool,
}

Gselect.defaultProps = {
    error: false,
    children: [
        <option key='1' value='test'>test</option>,
        <option key='2' value='test'>test</option>,
        <option key='3' value='test'>test</option>,
        <option key='4' value='test'>test</option>,
        <option key='5' value='test'>test</option>,
    ]
}

export default Gselect;
