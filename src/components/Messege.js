import React from 'react';
const Messege = ({chatAvatar, messageInChat, myAnswer, chuckAnswer}) => {
   
    return (
        <div className="messege owner">
            <div className="messegeInfo">
                <img className="avatar" src={chatAvatar} alt="" />
                <div className="messegeSmsOnlineTime">
                    <div className="messegeSms">{messageInChat} {chuckAnswer}</div>
                    <span>24.10.21</span>
                </div>
            </div>
            <div className="messageContent">
                <p>{myAnswer}</p>
                <span>12.12.2012</span>
            </div>
        </div>
    );
};

export default Messege;