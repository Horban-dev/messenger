import React from 'react';
import Chats from './Chats';
import Navbar from './Navbar';
import { useState } from 'react';

const Sidebar = ({dialogs, onDialogFiltersChange }) => {

    return (
        <div className="sidebar">
            <Navbar onDialogFiltersChange={onDialogFiltersChange}/>
            <Chats dialogs={dialogs} />
        </div>
    );
};

export default Sidebar;