import React from 'react';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import {useState, useEffect} from 'react'
import { chatsData, dialogsData } from './data';
import axios from 'axios';
import { nanoid } from 'nanoid'

const Main = (props) => {
    const [mainChat, setMainChat] = useState(chatsData)
    const [chats, setChats] = useState(dialogsData)
    const [dialogFilters, setDialogFilters] = useState("")
    const [messageInChat, setMessageInChat] = useState('')
    const [answer, setAnswer] = useState('')

   /*  useEffect(() => {
        setTimeout(() => {
            getAnswer()
          }, 15000);
    }, [setMainChat])
 */
    async function getAnswer() {
        const apiUrl = "https://api.chucknorris.io/jokes/random"
        axios 
            .request(apiUrl)
            .then((response) => setAnswer(response.data.value))
            .catch((error) => console.log(error))
    }

    const addSms = (e) => {
        e.preventDefault()
       const newSms = {
            messageInChat,
        }
        setMainChat([...mainChat, newSms]) 
    }

    const filteredDialogs = dialogsData.filter(post => {
        if (dialogFilters === '') {
        return true;
        } else if (post.text.toLowerCase().includes(dialogFilters) || post.nick.toLowerCase().includes(dialogFilters)) {
        return true;}  
    })
    
   /*  const changeChat = (id) => {
		const newChat = chats.filter((item) => item.nick === id);
		setChats(newChat);
	}; */
    
    
    return (
        <div className="main">
            <div className="container">
                <Sidebar  dialogs={filteredDialogs} onDialogFiltersChange={setDialogFilters}/>
                {mainChat.map(item => 
                    <Chat  
                    key={item.id}
                    headerLogo={item.headerLogo}
                    chatAvatar={item.chatAvatar} 
                    headerName={item.headerName} 
                    messageInChat={item.messageInChat}
                    myAnswer={item.myAnswer}
                    onAddSms={addSms}
                    onSmsText={setMessageInChat}
                    chuckAnswer={answer}
                    />
                )

                }
            </div>
        </div>
    );
};

export default Main;