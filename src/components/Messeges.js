import React from 'react';
import Messege from './Messege';
const Messeges = ({ chatAvatar, messageInChat, myAnswer, chuckAnswer, onButton, inputMessage}) => {
    return (
        <div className="messeges">
            <Messege 
                chuckAnswer={chuckAnswer} 
                chatAvatar={chatAvatar} 
                messageInChat={messageInChat} 
                myAnswer={myAnswer}
            />
            <Messege 
                chuckAnswer={chuckAnswer} 
                chatAvatar={chatAvatar} 
                messageInChat={messageInChat} 
                onButton={onButton}
                inputMessage={inputMessage}
            />
            
            {/* <Messege chatAvatar={chatAvatar} messageInChat={messageInChat} myAnswer={myAnswer}/> */}
        </div>
    );
};

export default Messeges;