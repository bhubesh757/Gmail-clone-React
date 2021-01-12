import { Button } from '@material-ui/core'
import React from 'react'


import './Login.css'

import {auth , provider } from './firebase'
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux'
function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
            auth.signInWithPopup(provider)
            .then(({user}) => {
                dispatch(login({
                    displayName : user.displayName,
                    email : user.email,
                    photoUrl : user.photoURL,

                }))
            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className = 'login'>
                {/* <h1>Hello I am Login page</h1> */}
                <div className="login__container">
                    <img src = 'https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg'></img>
                </div>

                <Button variant = 'contained' color = 'primary'  type = 'submit' onClick = {signIn}> Login </Button>
        </div>
    )
}

export default Login
