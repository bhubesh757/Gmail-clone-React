import React, { useState } from 'react'

import './Mail.css'

// Icons

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import SnoozeIcon from '@material-ui/icons/Snooze';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// Right

import { LabelImportant, PrintOutlined, UnfoldMore } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';
function Mail() {

    // 

    const selectedMail = useSelector(selectOpenMail)

    // history
    const history = useHistory()
    return (
        <div className = 'mail'>
            {/* <h1>Boom! Its working ! using the history </h1> */}
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick = {() => history.push('/')} >
                        <ArrowBackIcon></ArrowBackIcon>
                    </IconButton>
                    <IconButton>
                        <ArchiveIcon></ArchiveIcon>
                    </IconButton>
                    <IconButton>
                        <InfoIcon></InfoIcon>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon></DeleteIcon>
                    </IconButton>
                    <IconButton>
                        <MarkunreadIcon></MarkunreadIcon>
                    </IconButton>
                    <IconButton>
                        <SnoozeIcon></SnoozeIcon>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon></MoveToInboxIcon>
                    </IconButton>
                    <IconButton>
                        <LabelIcon></LabelIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
              <IconButton>
                  <UnfoldMore></UnfoldMore>
              </IconButton>
              <IconButton>
                    <PrintOutlined></PrintOutlined>
              </IconButton>
              <IconButton>
                <ExitToAppIcon></ExitToAppIcon>
              </IconButton>
                </div>
                </div>
                <FlipMove>

                <div className="mail__body">
                    <div className="mail_bodyHeader">
                        <h2>{selectedMail?.subject}</h2>
                        <LabelImportant className = 'mail__important'></LabelImportant>
                        <p>{selectedMail?.title}</p>
                        <p className = 'mail__time'>{selectedMail?.time}</p>
                    </div>
                    <div className="mail__message">
    <p>{selectedMail?.description}</p>
                    </div>
            </div>
                </FlipMove>
        </div>
    )
}

export default Mail
