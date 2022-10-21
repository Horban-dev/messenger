import { nanoid } from 'nanoid'
export const chatsData = [
    {   id: nanoid(),
        headerLogo: "https://m.spletnik.ru/img/2022/10/Olya/0110/marina-post.jpg", 
        chatAvatar: "https://m.spletnik.ru/img/2022/10/Olya/0110/marina-post.jpg", 
        headerName: 'Josephina', 
        messageInChat: 'first dialog.', 
        myAnswer: 'its my first question'},
        
    /* {   id: nanoid(),
        headerLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmx7HN0tq31rBrVNJlUqG8uTkU8HMbd-00NQ&usqp=CAU",  
        chatAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmx7HN0tq31rBrVNJlUqG8uTkU8HMbd-00NQ&usqp=CAU",   
        headerName: 'Anton',  
        messageInChat: 'hi-hi, testing props.',  
        myAnswer: 'okey, boss'},
    {   id: nanoid(),
        headerLogo: "https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/277d214b9adff0c3cbfaa579679c0106.jpeg", 
        chatAvatar: "https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/277d214b9adff0c3cbfaa579679c0106.jpeg", 
        headerName: 'Oleg', 
        messageInChat: 'hello, how are you?', 
        myAnswer: 'hey, im fine)'} */
]

export const dialogsData = [
    {id: nanoid(), pics: 'https://m.spletnik.ru/img/2022/10/Olya/0110/marina-post.jpg', nick: 'Josephina', text: 'ok, thanks', date: 'jun 12, 17'},
    {id: nanoid(), pics: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmx7HN0tq31rBrVNJlUqG8uTkU8HMbd-00NQ&usqp=CAU', nick: 'Anton', text: 'hi, bro', date: 'jun 12, 127'},
    {id: nanoid(), pics: 'https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/277d214b9adff0c3cbfaa579679c0106.jpeg', nick: 'Oleg', text: 'hey, man..', date: 'may 07, 11'}
]