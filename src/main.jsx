import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './output.css'
import {NotesApp,
  loader as urlChecker,
} from './routers/notesApp';

import Login, {
  action as loginAction
} from './routers/login';

import SignUp, {
  action as signUpAction
} from './routers/signUp';

import ForgotPassword, {
  action as forgotPasswordAction
} from './routers/forgotPassword';

import CreateNewPassword, {
  action as createNewPasswordAction,
} from './routers/createNewPassword';

import AccountRegistered from './routers/accountRegistered';


import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <NotesApp />,
    loader: urlChecker,
    errorElement: <h1>404 Not Found</h1>
  },
  {
    path: 'login',
    element: <Login />,
    action: loginAction,
  },{
    path: 'signup',
    element: <SignUp />,
    action: signUpAction,
  }, {
    path: 'forgot-password',
    element: <ForgotPassword />,
    action: forgotPasswordAction,
  }, {
    path: 'createNewPassword',
    element: <CreateNewPassword />,
    action: createNewPasswordAction,
  }, {
    path: 'account-registered',
    element: <AccountRegistered />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

function App() {
  return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
  )
}