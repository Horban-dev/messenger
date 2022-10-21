import React from 'react';
import Messege from './Messege';
const Messeges = ({chatAvatar, messageInChat, myAnswer, chuckAnswer}) => {
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
            />
            
            {/* <Messege chatAvatar={chatAvatar} messageInChat={messageInChat} myAnswer={myAnswer}/> */}
        </div>
    );
};

export default Messeges;