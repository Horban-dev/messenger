import React from 'react';

const Persons = ({pics, nick, text, date}) => {
    return (
        <div>
            <div className="dialogs">
                <img className="avatar" src={pics} alt="avatar" />
                <div className="dialogs_text">
                    <div className="chats_name">{nick}</div>
                    <span className="last_sms">{text}</span>
                </div>
                <p className="chats_date">{date}</p>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Persons;