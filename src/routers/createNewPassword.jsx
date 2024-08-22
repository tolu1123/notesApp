import React,{useState, useRef, useEffect} from 'react'

import { Form, useNavigate } from 'react-router-dom';
import sideImg from "/images/small-team.png";
import { verifyPasswordResetCode, confirmPasswordReset,signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../auth/firebase";

// Function to get parameter
function getParameterByName(name) {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(name);
}

export async function  action({request}) {
    const formData = await request.formData();
    const {password, confirmPassword} = Object.fromEntries(formData);

    //Get the action code from the URL
    const actionCode = getParameterByName('oobCode');
    console.log(actionCode);

    async function handleResetPassword(auth, actionCode) {
        // Localize the UI to the selected language as determined by the lang
        // parameter.
        try {
            const accountEmail = await verifyPasswordResetCode(auth, actionCode);
            console.log(accountEmail, 'logged')
            const newPassword = password;
            await confirmPasswordReset(auth, actionCode, newPassword);
            console.log('Password reset checked')
            await signInWithEmailAndPassword(accountEmail, newPassword);
            console.log('Trying to check if the user is signed in')
            return null;
        } catch (error) {
            // Error occurred during confirmation. The code might have expired or the
            // password is too weak.
            const errorCode = error.code
            const errorMessage = error.message
            const errorElement = document.querySelector('.errorDiv');
            //Fill the errorElement with the errorMessage
            if(errorCode == 'auth/expired-action-code') {
                errorElement.textContent = 'Your emaillink has expired, try resetting your password again.'
            }else if(errorCode == 'auth/invalid-action-code') {
                errorElement.textContent = 'Your emaillink is invalid, try resetting your password again.'
            }else if (errorCode == 'auth/weak-password') {
                errorElement.textContent = 'The password is too weak.';
            } else {
                errorElement.textContent = errorMessage;
            }
            errorElement.classList.remove("hidden");
            // Add a timeout to hide the message after 3 seconds
            setTimeout(() => {
                errorElement.classList.add('hidden');
            }, 3000)
            throw new Error('An error occured',error)
        }
    }
    // Call the handleResetPassword function
    await handleResetPassword(auth, actionCode);
    return null;

}



export default function CreateNewPassword() {
    const navigate = useNavigate()

    const passwordField = useRef(null);
    const confirmPasswordField = useRef(null);
    // Used to monitor the value of the password field
    const [passwordVal, setPasswordVal] = useState("");
    const [confirmPasswordVal, setConfirmPasswordVal] = useState("");
    // Used to monitor if the password field is visible or not
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    //Used to monitor if the password and confirm-password field length is greater than 6
    const [password, setPassword] = useState(true);
    const [validConfPassword, setValidConfPassword] = useState(true);

    useEffect(() => {
        const unSubscribeAuth = onAuthStateChanged(auth, (user) => {
          if (user) {
            navigate("/");
          } else {
            console.log("User is not signed in");
          }
        });
    
        return () => unSubscribeAuth();
    }, []);


    return (
        <>
            {/* The div to display if there is an error */}
            <div className="errorDiv absolute right-5 top-10 p-5 border border-pink-400 border-solid text-500 inter-regular hidden"></div>
            {/* A link to return back to Reset password */}
            <button 
                onClick={() => {
                    navigate('/forgot-password')
                }}
                className='mt-5 mx-5 sm:mx-8 sm:mt-5 bg-black rounded-full text-white text-base w-10 h-10 hover:bg-white hover:text-black shadow-sm shadow-black'
                >
                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
            </button>

            <div className="flex flex-col h-dvh items-center justify-center sm:items-start sm:justify-start">
            <header className="sm:px-8 sm:pt-4 sm:text-left text-center">
            <h1 className="poppins-medium justify-self-start self-start text-fullBlack poppins-medium text-xl md:pb-0">
                Your Logo
            </h1>
            </header>
    
            <div className="login flex sm:flex-grow flex-col-reverse md:flex-row p-7 justify-center items-center">
            <div className="w-full flex flex-col items-center md:justify-center md:items-center md:w-1/2">
                <Form
                method="post"
                autoComplete="off"
                className="w-full sm:w-[90%] md:w-4/5"
                >
                <h2 className="poppins-semibold text-3xl mb-5">Create new password</h2>
    
                <div className="passwordField relative mb-5">
                    <input
                    type="password"
                    id="password"
                    name="password"
                    className="h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm"
                    required
                    value={passwordVal}
                    ref={passwordField}
                    onChange={(e) => {
                        //Set the value of the password field
                        setPasswordVal(e.target.value);
                        //Set the password initial state to false to monitor the length of the created password as the length should be greater than 6
                        setPassword(false);
                        // // check if the value of the password field is greater than 6
                        if (e.target.value.length > 6) {
                        setPassword(true);
                        }
                    }}
                    />
                    <label
                    htmlFor="password"
                    className="poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                                    peer-valid:-translate-y-5"
                    >
                    Password
                    </label>
                    
                    {/* The button to toggle the view of the password */}
                        <span
                            className="padLock absolute top-2 right-2"
                            onClick={(e) => {
                            //Toggle the password bisibility
                            setPasswordVisible((passwordVisible) => !passwordVisible);
                            passwordField.current.type = passwordVisible
                                ? "password"
                                : "text";
                            }}
                        >
                            {passwordVisible ? (
                            <i className="fa-sharp fa-solid fa-eye"></i>
                            ) : (
                            <i className="fa-sharp fa-solid fa-eye-slash"></i>
                            )}
                        </span>
                        {!password && (
                            <div className="text-xs">
                            Pasword length must be greater than 6.
                            </div>
                        )}
                    
                </div>
    
                {/* confirm password input */}
                <div className="confirmPasswordField relative mb-5">
                    <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm"
                    required
                    value={confirmPasswordVal}
                    ref={confirmPasswordField}
                    onChange={(e) => {
                        //Set the value of the confirm password field
                        setConfirmPasswordVal(e.target.value);
                        //Set the confirm password initial state to false to monitor if the value of the confirm password field is equal to the password field
                        setValidConfPassword(false);
                        // check if the value of the confirm password field is equal to the password field
                        if (
                        e.target.value.length >= 6 &&
                        e.target.value === passwordField.current.value
                        ) {
                        setValidConfPassword(true);
                        }
                    }}
                    />
                    <label
                    htmlFor="confirmPassword"
                    className="poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                                    peer-valid:-translate-y-5"
                    >
                    Confirm Password
                    </label>
    
                    {/* The button to toggle the view of the password */}
                    <span
                    className="padLock absolute top-2 right-2"
                    onClick={(e) => {
                        //Toggle the password bisibility
                        setConfirmPasswordVisible(
                        (confirmPasswordVisible) => !confirmPasswordVisible
                        );
                        confirmPasswordField.current.type = confirmPasswordVisible
                        ? "password"
                        : "text";
                        }
                        }
                    >
                    {confirmPasswordVisible ? (
                        <i className="fa-sharp fa-solid fa-eye"></i>
                    ) : (
                        <i className="fa-sharp fa-solid fa-eye-slash"></i>
                    )}
                    </span>
    
                    {!validConfPassword && (
                    <div className="peer mt-2 text-xs">
                        The value of the password field should be equal to the confirm
                        password field.
                    </div>
                    )}
                </div>
    
                <div className="signUpButton">
                    <button
                    type="submit"
                    // This form will be disabled if the password field is less than 6 or the confirm password field is not equal to the password field
                    disabled={!validConfPassword}
                    className="poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack"
                    >
                    Reset Password
                    </button>
                </div>
    
                
                
                </Form>
            </div>
    
            <div className="flex flex-col items-center justify-center md:w-1/2">
                <div className="sideImage hidden md:flex">
                <img src={sideImg} alt="A team sharing their notes" />
                </div>
            </div>
            </div>
        </div>
    </>
    )
}