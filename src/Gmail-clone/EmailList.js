import { Checkbox  } from '@material-ui/core'
import React from 'react'


// icons

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
// right

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';

// section 
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './EmailList.css'
import Section from './Section';
import EmailRow from './EmailRow';
function EmailList() {
    return (
        <div className = 'emailList'>
            {/* <h1> I am Email List</h1> */}
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox></Checkbox>
                    <IconButton>
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                    <IconButton>
                        <RefreshIcon></RefreshIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>

                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon></ChevronLeftIcon>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon></ChevronRightIcon>
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon></KeyboardIcon>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon></SettingsIcon>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__section">
                <Section color = 'red' selected Icon = {InboxIcon} title = 'Primary'></Section>
                <Section color = '#1A73EB' Icon = {PeopleIcon} title = 'Social'></Section>
                <Section color = 'green' Icon = {LocalOfferIcon} title = 'Promotion'></Section>
            </div>

            <div className="emailList__mailList">
                  <EmailRow
                  title = 'The Postman Team'
                  subject = 'Hackathon Alert: Announcing the Postman API Hack '
                  description = 'Hack the Future of APIs and Unleash What You Can Do'
                  time = '5:54'>
                  </EmailRow>
                  <EmailRow
                  title = 'The Postman Team'
                  subject = 'Hackathon Alert: Announcing the Postman API Hack '
                  description = 'Hack the Future of APIs and Unleash What You Can Do'
                  time = '5:54'>
                  </EmailRow>
            </div>
        </div>
    )
}

export default EmailList
