import React from 'react';
import PropTypes from "prop-types";

const CustomInputField = ({
    label,
    placeholder,
    value,
    type,
    onCustomFieldChange,
    targetState
}) => {
    
    const changeHandler = event => {
        onCustomFieldChange(event, targetState);
    };

    return (
        <div className="form-group">
            <label htmlFor="name">{label}</label>
            <input 
                type={type} 
                value={value}
                className="form-control" 
                id="name" 
                placeholder={placeholder}
                required={true}
                onChange={changeHandler}
            />
        </div>
    )
};

CustomInputField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onCustomFieldChange: PropTypes.func.isRequired,
    targetState: PropTypes.string.isRequired
};
        
export default CustomInputField;