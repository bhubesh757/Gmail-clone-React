import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'

import './EmailRow.css'

// icons

import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';
function EmailRow({title , subject , description , time , id}) {

    // history
    const history = useHistory() //we can push the webpage

    // dispatch

    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
                id , title , subject , description , time 
        })
        
        )

        history.push('/mail')
    };

    


    return (
        <div onClick = {openMail} className = 'emailRow'>
                {/* <h1> Boom i am Email Row</h1> */}

               <div className="emailRow__options">
               <Checkbox></Checkbox>
               <IconButton>
                   <StarOutlineIcon></StarOutlineIcon>
               </IconButton>
               <IconButton>
                    <LabelImportantIcon></LabelImportantIcon>
               </IconButton>
               </div>

               <div className="emailRow__title">
                   <h3>
                       {title}
                   </h3>
               </div>
               <div className="emailRow__message">
                    <h4>{subject}
                    <span className = 'emailRow__description'>
                    {description}
                    </span>
                     </h4>
               </div>
               <p className = 'emailRow__time'>{time}</p>
        </div>
    )
}

export default EmailRow
