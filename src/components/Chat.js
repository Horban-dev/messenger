import React from 'react';
import Messeges from './Messeges';
import InputSmsText from './InputSmsText';
const Chat = ({headerLogo, headerName, chatAvatar, messageInChat, myAnswer, onAddSms, onSmsText, chuckAnswer, setOnButton, onButton, inputMessage, handleChange}) => {
    return (
        <div className='chat'>
            <div className="chat_header">
                <img className="avatar" src={headerLogo} alt="ava" />
                <span>{headerName}</span>
            </div>
            <Messeges  inputMessage={inputMessage} chuckAnswer={chuckAnswer}  chatAvatar={chatAvatar} messageInChat={messageInChat} myAnswer={myAnswer} setOnButton={setOnButton} onButton={onButton}/>
            <InputSmsText setOnButton={setOnButton} handleChange={handleChange} onSmsText={onSmsText} onAddSms={onAddSms}/>
        </div>
    );
};

export default Chat;