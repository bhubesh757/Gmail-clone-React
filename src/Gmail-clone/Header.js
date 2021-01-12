import React from 'react'

import './Header.css'
// icons

import ListIcon from '@material-ui/icons/List';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// header right
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from './firebase';
// import { useDispatch } from 'react-redux';
function Header() {

    // importing the image from the google
    const user = useSelector(selectUser)
    console.log(user);

    const dispatch = useDispatch()

    console.log('dispatch ', dispatch);


    // signout

    const signOut = () => {
        dispatch(logout());
        auth.signOut()
    }

    console.log('signout' , signOut);
    
    return (
        <div className = 'header'>
            <div className="header__left">
                <IconButton>
                <ListIcon></ListIcon>
                </IconButton>
                {/* image */}
                <img src = 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png'>
                </img>
            </div>

            <div className="header__middle">
            <SearchIcon></SearchIcon>
                <input type = 'text' className = 'header__middleText' placeholder = 'Search mail' >
                </input>
                <KeyboardArrowDownIcon className = 'header__middleArrow'></KeyboardArrowDownIcon>
            </div>

            <div className="header__right">
                <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton>
                <IconButton>
                    <AppsIcon></AppsIcon>
                </IconButton>
                <IconButton>
                        <Avatar onClick = {signOut} src = {user?.photoUrl} ></Avatar>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
