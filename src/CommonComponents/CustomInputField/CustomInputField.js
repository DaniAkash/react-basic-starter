import React from 'react';


const CustomInputField = ({
    label,
    placeholder,
    value
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
            />
        </div>
    )
};
        
export default CustomInputField;