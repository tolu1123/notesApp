import React, { useEffect, useState, useRef } from "react";
import { Form, useNavigate } from "react-router-dom";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import sideImg from "/images/small-team.png";
import emailSentImg from "/images/emailSent.png"
import {auth } from "../auth/firebase";


export async function action({ request }) {
  const formData = await request.formData();
  // We destructure the email and password from the form data
  const {email} = Object.fromEntries(formData);
    
  // We get the email from the username
  if(email !== '') {
    try {
        // Password reset email sent successfully
        await sendPasswordResetEmail(auth, email)
 
        //We hide the form-mail element but fades out with a transition
        const formElement = document.querySelector('.form-mail');
        const emailSentElement = document.querySelector('.email-sent');
        //Add an opacity-100 to hide the element
        formElement.classList.add('opacity-100');
        formElement.classList.add('-translate-x-[80px]')
        //After this we will hide the element and display the successfully sent email UI
        const timeOut = setTimeout(()=> {
          formElement.classList.add('hidden');
          emailSentElement.classList.remove('hidden');
          emailSentElement.classList.remove('translate-x-80px')
        },105) 

    }catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..set the content of the submit button to error message
        const submitButton = document.querySelector('.submitButton');
        submitButton.textContent = 'An error encountered';
        submitButton.classList.add('bg-red');
        submitButton.classList.add('hover:bg-red');
        submitButton.classList.add('text-white');

        // Handle error, e.g., show an error message
        return {
            success: false,
            error: errorMessage
        };
    };
  }
  return null;
}

export default function ForgotPassword() {
  // we initialize the navigate hook
  const navigate = useNavigate();

  //This state is used to store the data of a user when a user logins
  // if the user's data has not been stored, we will then store it using the auth listener
  const [email, setEmail] = useState('');
  //State to disable button
  const [disableBtn, setDisableBtn] = useState(false);
  //A useRef to get the submit and resubmit button
  const sendMail = useRef(null)
  const resendMail = useRef(null)
  const [oneMinute, setOneMinute] = useState(0)

  useEffect(() => {
   const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        console.log("user not signed in!");
      }
    });
    return () => unSub();
  }, []);

  //This is 
  useEffect(() => {
    let timer;
    if (disableBtn) {
      timer = setInterval(() => {
        setOneMinute(prev => prev + 1);
      }, 1000);
    }

    if (oneMinute > 60) {
      setDisableBtn(false);
      clearInterval(timer);
      setOneMinute(0);
    }

    return () => clearInterval(timer);
  }, [disableBtn, oneMinute]);

  return (
    <div className="flex flex-col h-dvh items-center justify-center sm:items-start sm:justify-start">
      <header className="sm:px-8 pt-10 sm:pt-15 sm:text-left text-center">
        <h1 className="fake-logo poppins-medium justify-self-start self-start text-fullBlack text-xl md:pb-0">
          NotesApp
        </h1>
      </header>

      <div className="form-mail login flex sm:flex-grow flex-col md:flex-row p-7 transition-all duration-100 ease-linear">
        <div className="flex flex-col items-center justify-center md:w-2/5">
          <div className="sideImage hidden md:flex">
            <img src={sideImg} alt="A team sharing their notes" />
          </div>
        </div>

        <div className="flex flex-col items-center md:justify-center md:items-center w-full md:w-1/2">
          <Form
            method="post"
            autoComplete="off"
            className="w-full sm:w-[90%] md:w-4/5"
          >
            <h2 className="poppins-semibold text-3xl mb-3">Forgot Password</h2>
            <p className="poppins-regular text-sm mb-6">Enter your email and we will send you instructions on how to reset your password.</p>

            <div className="emailField relative mb-5">
              <input
                type="email"
                id="email"
                name="email"
                className="h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm"
                required
                value={email}
                onChange={(e) => {
                   setEmail(e.target.value);
                   const bgRed = sendMail.current.classList.contains('bg-red');
                   const hoverRed = sendMail.current.classList.contains('hover:bg-red')
                   if(bgRed && hoverRed) {
                     sendMail.current.classList.remove('bg-red');
                     sendMail.current.classList.remove('hover:bg-red');
                     sendMail.current.textContent = 'Send Reset Email';
                   }
                }}
              />

              <label
                htmlFor="email"
                className="poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white peer-valid:-translate-y-5"
              >
                Email
              </label>

            </div>

             

            <div className="loginButton">
              <button
                type="submit"
                className="submitButton poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack"
                ref={sendMail}
              >
                Send Reset Email
              </button>
            </div>
         
          </Form>
        </div>
      </div>

      {/* The div that shows email sent */} 
      <div className="email-sent login flex sm:flex-grow flex-col md:flex-row p-5 hidden translate-x-80px transition-all delay-75 duration-100 ease-linear">

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
          <h2 className="poppins-semibold text-center text-3xl mb-3">Email sent successfully</h2>
          <p className="text-center">A mail has been sent to <span className="font-semibold">{email}</span>, this mail contains a link to guide you to reset your forgotten password.</p>
          <button
          ref={resendMail}
            disabled={disableBtn}
            className="mt-5 poppins-medium text-white bg-accent-fullBlack w-1/2 py-3 rounded-md hover:text-fullBlack hover:bg-white hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack border border-solid border-blac flex flex-row justify-center items-center gap-1 px-2 disabled:opacity-60 hover:disabled:text-white hover:disabled:bg-fullBlack"
            onClick={() => {
              //Resend the forgot mail instructions
              sendPasswordResetEmail(auth, email).then(result => {
                //set the disableBtn state
                setDisableBtn(true);
              }).catch(error => {
                //Set the disable button content
                resendMail.current.textContent = "Error sending mail";
                //Set the disableBtn state
                setDisableBtn(true);
              })
              

            }}
          >
            {/*Add a functionality to add a disable this button after click and to hold it until after 60 seconds and then undisable this buttton. */}
            <p ref={resendMail}>Resend Email</p> <span className="text-sm">{oneMinute !== 0? (oneMinute) : ''}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
