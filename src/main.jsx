import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './output.css'
import {NotesApp, loader as AuthChecker} from './routers/notesApp';

import Login, {
  action as loginAction
} from './routers/login';

import SignUp, {
  action as signUpAction
} from './routers/signUp';

import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <NotesApp />,
    errorElement: <h1>404 Not Found</h1>,
    loader: AuthChecker,
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
    path: 'notesApp',
    element: <div>
      <h1>
        NotesApp
      </h1>
    </div>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

function App() {
  return (
  //  <ChangeThemeContext.Provider value={setDarkTheme}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    // </ChangeThemeContext.Provider>
  )
}