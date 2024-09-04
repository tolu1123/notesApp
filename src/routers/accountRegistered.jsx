import React,{useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {auth} from '../auth/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import emailSentImg from "/images/emailSent.png"

function getParameterByName(name) {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(name);
}

export default function AccountRegistered() {
    const navigate = useNavigate();
  
    const [emailVal, setEmailVal] = useState(getParameterByName('email'));
  
    const errorDiv = useRef(null)
  
  
  
    useEffect(() => {
      const unSubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (user) {
          if(user?.emailVerified) {
            navigate('/');
          }else {
            //We will inform the user to verify his or her mail.
            console.log('Verify your mail.')
            //Set the contents
            errorDiv.current.textContent = `Please Verify your mail`;
            //Remove the error colors
            errorDiv.current.classList.remove('border-red', 'text-red');
            //Add text and border-color
            errorDiv.current.classList.add('border-green', 'text-green');
            //Remove the hidden class to display the error
            errorDiv.current.classList.remove('hidden')
            //Set a timeout to later hide the error div
            setTimeout(() => {
                errorDiv.current.classList.add('hidden')
                //Remove the error colors
                errorDiv.current.classList.remove('border-green', 'text-green');
                //Add text and border-color
                errorDiv.current.classList.add('border-red', 'text-red');
            }, 4000)
          }
        } else {
          console.log("User is not signed in");
        }
      });
  
      return () => unSubscribeAuth();
    }, []);
  
  
    
    return (
      <>
        {/* A div for the errors */}
        <div ref={errorDiv} className="error-div sm:min-w-64 absolute right-5 top-5 text-red border border-solid rounded-md border-red text-base py-4 px-6 mt-5 hidden">
          
        </div>
  
        <div className="flex flex-col h-dvh items-center justify-center sm:items-start sm:justify-start ">
          <header className="sm:px-8 sm:pt-10 sm:text-left text-center">
            <h1 className="fake-logo poppins-medium justify-self-start self-start text-fullBlack text-xl md:pb-0">
              NotesApp
            </h1>
        </header>
  
  
        {/* The div that shows email sent */} 
        <div className="email-sent login flex sm:flex-grow flex-col md:flex-row p-5 translate-x-80px transition-all delay-75 duration-100 ease-linear">
  
          {/* The image to get displayed */}
          <div className="flex flex-col items-center justify-center md:w-2/5">
            <div className="sideImage hidden md:flex w-[70%]">
              <img src={emailSentImg} alt="Email successful image" />
            </div>
          </div>
  
          <div className="flex flex-col items-center md:justify-center md:items-center w-full md:w-1/2">
  
            {/* The image to be displayed */}
            <div className="sideImage md:hidden w-[70%]">
              <img src={emailSentImg} alt="Email successful image" />
            </div>
            <h2 className="poppins-semibold text-center text-3xl mb-3">Verification Email Sent!</h2>
            <p className="text-center">Account created successfully!!, a mail has been sent to <span className="font-semibold">{emailVal}</span>, this mail contains a link that will redirect you to the application</p>
          </div>
  
        </div>
  
        </div>
      </>
    );
  }
  