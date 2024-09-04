import React,{useState, useRef, useEffect} from 'react';
import {useNavigate, redirect} from 'react-router-dom';
import {auth} from '../auth/firebase';
import {onAuthStateChanged, sendEmailVerification} from 'firebase/auth';
import emailSentImg from "/images/emailSent.png"

export async function loader() {
    if(!auth.currentUser) {//if the current USER is not available
        return redirect('/login'); //redirect to the login page
    }else {
        return null;
    }
}


export default function ResendVMail() {
    const navigate = useNavigate();
    const [emailVal, setEmailVal] = useState(auth.currentUser?.email);
    //State to disable button
    const [disableBtn, setDisableBtn] = useState(false);
    const [oneMinute, setOneMinute] = useState(0)
  
    const errorDiv = useRef(null)
    const resendMail = useRef(null);
    const verificationSuccessful = useRef(null);
    const notVerified = useRef(null);
  
    //This is a useEffect that debounces the button for 60 seconds
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
            resendMail.current.textContent = "Resend verification email";
        }

        return () => clearInterval(timer);
    }, [disableBtn, oneMinute]);
  
    useEffect(() => {
      const unSubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (user) {
          if(user.emailVerified) {
            navigate('/');
          }else {
            //We will inform the user to verify his or her mail.
            console.log('Verify your mail.')
            //Set the contents
            errorDiv.current.textContent = `Please verify your email.`;
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
        <div className="email-sent login flex sm:flex-grow flex-col sm:flex-row-reverse p-5 translate-x-80px transition-all delay-75 duration-100 ease-linear">
  
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

            <h2 className="poppins-semibold text-center text-3xl mb-3">Resend Verification Mail</h2>
            <p ref={verificationSuccessful} className="text-center verification-successful hidden">Verification email sent successfully!!, a mail has been sent to <span className="font-semibold">{emailVal}</span>, this mail contains a link that will verify your mail on clicking it.</p>
            <p ref={notVerified} className="not-verified">
                You have not verified your mail, please verify your mail to continue using the app.
            </p>
            <div
            className="w-full sm:w-[90%] md:w-4/5"
            >
                <div className="loginButton">
                <button
                    disabled={disableBtn}
                    className="submitButton mt-5 poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:text-fullBlack hover:bg-white hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack border border-solid border-blac flex flex-row justify-center items-center gap-1 px-2 disabled:opacity-60 hover:disabled:text-white hover:disabled:bg-fullBlack mx-auto"
                    onClick={(e) => {
                    //Resend the verification-mail instructions
                    const user = auth.currentUser || JSON.parse(localStorage.getItem('user'));
                    //Remove the stored value from localStorage
                    localStorage.removeItem('user'); 
                    sendEmailVerification(user).then(result => {
                        //Display the success message
                        verificationSuccessful.current.classList.remove('hidden');
                        //Hide the not verified message
                        notVerified.current.classList.add('hidden');
                        //set the disableBtn state
                        setDisableBtn(true);
                    }).catch(error => {
                        console.log(error)
                        //Set the disable button content
                        resendMail.current.textContent = "Error sending mail";
                        //Set the disableBtn state
                        setDisableBtn(true);
                    })
                    

                    }}
                >
                    {/*Add a functionality to add a disable this button after click and to hold it until after 60 seconds and then undisable this buttton. */}
                    <p ref={resendMail}>Resend verification email</p> <span className="text-sm">{oneMinute !== 0? (oneMinute) : ''}</span>
                </button>
                </div>
            </div>
            
          </div>
  
        </div>
  
        </div>
      </>
    );
  }
  