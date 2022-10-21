import React from 'react';
import Persons from './Persons';
import {useState} from 'react'

import Search from './Search';

const Chats = ({dialogs}) => {
    
   
    return (
        <div className="chats">
            <h1 className="chats_title">Chats</h1>
            <div className="dialogs_1">
            {dialogs.map(item => 
                    <Persons 
                        pics={item.pics}
                        nick={item.nick} 
                        text={item.text} 
                        date={item.date} 
                        key={item.id} 
                        
                    />
                    
                )
                
            }
            
            </div>  
              
        </div>
    );
};

export default Chats;