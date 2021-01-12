import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Gmail-clone/Header';
import Sidebar from './Gmail-clone/Sidebar';

// react router dom
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Mail from './Gmail-clone/Mail';
import EmailList from './Gmail-clone/EmailList';
import SendMail from './Gmail-clone/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Gmail-clone/Login';
import { auth } from './Gmail-clone/firebase';

function App() {
// mailSlice // react redux
const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  // const sendMessageIsOpen = useSelector(state => state.selectSendMessageIsOpen)
  const dispatch = useDispatch();

  const user = useSelector(selectUser)


   useEffect (() => {
     auth.onAuthStateChanged(user => {
       if (user) {
          // logged in

          dispatch(login({
                    displayName : user.displayName,
                    email : user.email,
                    photoUrl : user.photoURL,
          }))
       }
       else {

       }
     })
   }, [])
  
  return ( 

    <Router>

      {
        !user ?(
          <Login></Login>
        ): (

    <div className="app">
      {/* <h1>Gmail Clone React Redux</h1> */}

      {/* header */}
      <Header></Header>
      {/* sidebar */}
      <div className="app_body">

      <Sidebar></Sidebar>
      <Switch>
          <Route path  = '/mail'>
            <Mail></Mail>
          </Route>

          <Route path = '/'>
            <EmailList></EmailList>
          </Route>
      </Switch>
      </div>

      {/* Mail */}

      {sendMessageIsOpen && <SendMail />}

    </div>
        )
      }

    </Router>
    
  );
  
}



export default App;
