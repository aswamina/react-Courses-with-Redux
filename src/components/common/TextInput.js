import React, {PropTypes} from 'react';

const TextInput = ({name, label, value, onChange, errors, placeholder}) => {
  let wrapperClass = 'form-group';
  if (errors && errors.length > 0) {
    wrapperClass += " " + 'has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );

};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextInput;
