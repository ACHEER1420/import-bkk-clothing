import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, value = '', ...props }) => (
  <div className='form-group'>
    <input className='form-input' value={value} {...props} required />
    {label ? (
      <label className={`${value.length > 0 ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
