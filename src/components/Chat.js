import React from 'react';
import Messeges from './Messeges';
import InputSmsText from './InputSmsText';
const Chat = ({headerLogo, headerName, chatAvatar, messageInChat, myAnswer, onAddSms, onSmsText, chuckAnswer}) => {
    return (
        <div className='chat'>
            <div className="chat_header">
                <img className="avatar" src={headerLogo} alt="ava" />
                <span>{headerName}</span>
            </div>
            <Messeges chuckAnswer={chuckAnswer}  chatAvatar={chatAvatar} messageInChat={messageInChat} myAnswer={myAnswer}/>
            <InputSmsText onSmsText={onSmsText} onAddSms={onAddSms}/>
        </div>
    );
};

export default Chat;