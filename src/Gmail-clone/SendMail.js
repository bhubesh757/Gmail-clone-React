import React from 'react'

import './SendMail.css'
// Icons 

import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from './firebase';
import firebase from './firebase'

function SendMail() {

    // useforms

    const {register , handleSubmit , watch , errors} = useForm();

    // handlesubmit

    const onSubmit = (formData) => {

            db.collection('emails').add({
                Recipients :formData.Recipients,
                subject : formData.subject,
                message : formData.message,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            })

            dispatch (closeSendMessage())
    }

    // mailSlice

    const dispatch = useDispatch()
    return (
        <div className = 'sendMail'>
            <div className="sendmail__Header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage()) } className = 'sendMail__close'></CloseIcon>
            </div>

            <form onSubmit = {handleSubmit(onSubmit)}>
                <input type = 'email' ref = {register({required : true})} name = 'Recipients' placeholder = 'Recipients' type = 'text'></input>
                {errors.Recipients && 
                <p className  = 'sendMail__error'> Recipients is Required
                </p>
                }
                <input ref = {register({required : true})} name = 'subject'  placeholder = 'Subject' type = 'text'></input>
                {errors.subject &&  <p className  = 'sendMail__error'> Subject is Required!!</p>}
                <input ref = {register({required : true})} name = 'message' placeholder = 'message' className = 'sendMail__Message' type = 'text'></input>
                {errors.message &&  <p className  = 'sendMail__error' > Message is Required!!</p>}
                

                <div className="sendMail__options">
                    <Button type = 'submit' className = 'sendMail__button'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
