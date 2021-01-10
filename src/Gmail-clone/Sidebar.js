import { Button } from '@material-ui/core'
import React from 'react'

// icons
import AddIcon from '@material-ui/icons/Add';

import {IconButton} from '@material-ui/core'

// sidebarOption
import AllInboxIcon from '@material-ui/icons/AllInbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// header Footer
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';

import './Sidebar.css'
import SidebarOption from './SidebarOption';
function Sidebar() {
    return (
        <div className = 'sidebar'>
            {/* <h2>Hi I am Sidebar</h2> */}

            <Button startIcon = {<AddIcon fontSize = 'large'></AddIcon>} className = 'sidebar__compose'>Compose</Button>

            <SidebarOption Icon = {AllInboxIcon}  title = 'Inbox' number = '10' selected = {true}></SidebarOption>
            <SidebarOption Icon = {StarIcon}  title = 'Starred' number = '10'></SidebarOption>
            <SidebarOption Icon = {WatchLaterIcon}  title = 'snoozed' number = '10'></SidebarOption>
            <SidebarOption Icon = {SendIcon}  title = 'Sent' number = '10'></SidebarOption>
            <SidebarOption Icon = {DraftsIcon}  title = 'Drafts' number = '10'></SidebarOption>
            <SidebarOption Icon = {ExpandMoreIcon}  title = 'More' ></SidebarOption>

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                        <IconButton>
                            <VideocamIcon fontSize = 'small' ></VideocamIcon>
                        </IconButton>
                        <IconButton>
                            <PhoneIcon fontSize = 'small'></PhoneIcon>
                        </IconButton>
                        <IconButton>
                            <PersonIcon fontSize = 'small' ></PersonIcon>
                        </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
