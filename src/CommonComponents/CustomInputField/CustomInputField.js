import React from 'react';


const CustomInputField = ({
    label,
    placeholder,
    value,
    onCustomFieldChange
}) => {
    return (
        <div className="form-group">
            <label htmlFor="name">{label}</label>
            <input 
                type="text" 
                value={value}
                className="form-control" 
                id="name" 
                placeholder={placeholder}
                required={true}
                onChange={onCustomFieldChange}
            />
        </div>
    )
};
        
export default CustomInputField;