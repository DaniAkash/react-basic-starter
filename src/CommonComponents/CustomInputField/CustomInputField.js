import React from 'react';


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
        
export default CustomInputField;