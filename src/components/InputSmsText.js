import React from 'react';
import {useState} from 'react'
const InputSmsText = ({onAddSms, onSmsText, handleChange, setOnButton}) => {
    

   
    return (
        <div className="input_sms">
            <input 
                className="input" 
                type="text" 
                placeholder='Сообщение'
                /* onChange={e => onSmsText(e.target.value)}  */
                onChange={handleChange}
                />
            <button /* onClick={onAddSms} */onClick={() => setOnButton(true)} >ok</button>
        </div>
    );
};

export default InputSmsText;