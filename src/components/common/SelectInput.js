import React, {PropTypes} from 'react';

const SelectInput = ({name, label, value, options, defaultOption, onChange, errors}) => {
  let wrapperClass = 'form-group';
  if (errors && errors.length > 0) {
    wrapperClass += " " + 'has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select className="form-control" name={name} onChange={onChange} value={value}>
            <option value="" disabled>{defaultOption}</option>
            {options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })}
        </select>
      </div>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string
};

export default SelectInput;






