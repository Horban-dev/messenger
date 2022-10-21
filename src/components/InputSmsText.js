import React from 'react';
import {useState} from 'react'
const InputSmsText = ({onAddSms, onSmsText}) => {
    

   
    return (
        <div className="input_sms">
            <input 
                className="input" 
                type="text" 
                placeholder='Сообщение'
                onChange={e => onSmsText(e.target.value)} />
            <button onClick={onAddSms}>ok</button>
        </div>
    );
};

export default InputSmsText;