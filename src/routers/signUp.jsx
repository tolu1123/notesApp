import React, {
    useRef, 
    useState,
    useEffect,
} from 'react';

import {
    useNavigate,
    Link,
    Form,
} from 'react-router-dom'

import {
    signUp,
    storeUsername,
    userRef,
    crossCheckField,
    auth,
} from '../firebase'

import GithubSignIn  from '../GithubSignIn';
import GoogleSignIn from '../GoogleSignIn';


import { onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export async function action({request, params}) {
    const formData = await request.formData();
    console.log(formData);
    
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    console.log(username, email, password, confirmPassword)

    
    

    if(username.value !== '' && email.value !== '' && password.length > 6 && confirmPassword === password) {
        try {
            // sign up the user
            // We will receive the user's id when signup is acheived.
            let newUserId = await signUp(email, password);

            // store the username and email in the database
            await storeUsername(username, email, newUserId);
            console.log(username, email, password);
            return null;

            
        } catch (error) {
            console.log(error);
        }
    }
}

import sideImg from '/images/small-team.png';

export default function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [userExist, setUserExist] = useState(false);
    const [emailExist, setEmailExist] = useState(false);
    const passwordField = useRef(null);
    const confirmPasswordField = useRef(null);
    const [password, setPassword] = useState(true);
    const [validConfPassword, setValidConfPassword] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        // const unSubscribe = onSnapshot(userRef, (docs) => {
        //     docs.forEach(doc => {
        //         console.log(doc.data());
        //     })
        // });

        const unSubscribeAuth = onAuthStateChanged(auth, (user) => {
            if(user) {
                navigate('/');
            } else {
                console.log('User is not signed in');
            }
        });
    
      return () => unSubscribeAuth();
    }, []
    )

    async function checkField( e ,type, value) {
        let element = e.target;
        console.log(type,value);
        const val = await crossCheckField(type, value);
        console.log('crossChecker', val);
        type === 'username'? setUserExist(val): type === 'email'? setEmailExist(val): null; 
    }
    console.log(userExist,emailExist, validConfPassword);

    async function handleSubmit(e) {
        const formData = new FormData(e.target);
        console.log(formData)
        const {username, email, password, confirmPassword} = Object.fromEntries(formData);
 
        if(username !== '' && email !== '' && password.length > 6 && confirmPassword === password && !userExist && !emailExist) {
            try {
                // sign up the user
                // We will receive the user's id when signup is acheived.
                let newUserId = await signUp(email, password);

                // store the username and email in the database
                await storeUsername(username, email, newUserId);
                console.log(username, email, password);

                
            } catch (error) {
                console.log(error);
            }


        } else {
            // Fill all fields.
        }
    }
    return (
        <div className='flex flex-col h-dvh items-center justify-center sm:items-start sm:justify-start'>

            <header className='sm:px-8 sm:pt-10 sm:text-left text-center'>
                <h1 className='poppins-medium justify-self-start self-start text-fullBlack poppins-medium text-xl md:pb-0'>Your Logo</h1>
            </header>

            <div className='login flex sm:flex-grow flex-col-reverse md:flex-row p-7 justify-center items-center'>

                <div className="flex flex-col items-center md:justify-center md:items-center w-full md:w-1/2">

                    <Form 
                        method='post'
                        // onSubmit={(e) => {
                        //     e.preventDefault();
                        //     handleSubmit(e)
                        // }}
                        className='w-full sm:w-[90%] md:w-4/5'
                    >
 

                        <h2 className='poppins-semibold text-3xl mb-5'>Sign up!</h2>

                        <div className="userNameField relative mb-5">
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                className='h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm'  
                                required 
                                onChange={(e) => {
                                    setUserExist(true);
                                    const elementId = e.target.getAttribute('id');
                                    const elementVal = e.target.value;
                                    async function check() {
                                        await checkField(e, elementId, elementVal)
                                    }
                                    check();
                                    console.log(userExist)
                                }}
                            />

                            <label 
                                htmlFor="username" 
                                className='poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                                peer-valid:-translate-y-5'
                            >Username</label>

                            {
                                userExist &&
                                <div className='text-xs'>
                                This username already exist.
                            </div>}
                        </div>

                        <div className="emailField relative mb-5">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className='h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm'  
                                required
                                onChange={(e) => {
                                    setEmailExist(true);
                                    const elementId = e.target.getAttribute('id');
                                    const elementVal = e.target.value;
                                    async function check() {
                                        await checkField(e, elementId, elementVal)
                                    }
                                    check();
                                    console.log(emailExist)
                                }}
                            />

                            <label 
                                htmlFor="email" 
                                className='poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                                peer-valid:-translate-y-5'
                            >
                                Email
                            </label>

                            {
                                emailExist && 
                                <div className='text-xs'>
                                    This email is already in use!
                                </div>
                            }
                        </div>

                        <div className="passwordField relative mb-5">
                            <input 
                                type="password"
                                id="password" 
                                name="password" 
                                className='h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm'
                                required
                                ref={passwordField}
                                onChange={(e) => {
                                    setPassword(false);
                                    // check if the value of the password field is greater than 6
                                    if(e.target.value.length > 6) {
                                        setPassword(true);
                                    }
                                }
                                }
                            />
                            <label 
                                htmlFor="password"
                                className='poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                                peer-valid:-translate-y-5'
                            >
                                Password
                            </label>
                            
                            {/* The button to toggle the view of the password */}
                            <span 
                                className="padLock absolute top-2 right-2"
                                onClick={
                                    (e) => {
                                        //Toggle the password bisibility
                                        setPasswordVisible(passwordVisible => !passwordVisible);
                                        passwordField.current.type = passwordVisible ? 'password' : 'text';
                                    }
                                }
                                >
                                    {passwordVisible ? 
                                    <i className="fa-sharp fa-solid fa-eye"></i>
                                    : <i className="fa-sharp fa-solid fa-eye-slash"></i>}
                            </span>
                            {
                                !password && 
                                <div className='text-xs'>
                                    Pasword length must be greater than 6.
                                </div>
                            }
                        </div>

                        {/* confirm password input */}
                        <div className="confirmPasswordField relative mb-5">
                            <input 
                                type="password"
                                id="confirmPassword" 
                                name="confirmPassword" 
                                className='h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm'
                                required
                                ref={confirmPasswordField}
                                onChange={(e) => {
                                    setValidConfPassword(false);
                                    // check if the value of the confirm password field is equal to the password field
                                    if(e.target.value.length > 6 && e.target.value === passwordField.current.value) {
                                        setValidConfPassword(true);
                                    }
                                }}
                            />
                            <label 
                                htmlFor="confirmPassword"
                                className='poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                                peer-valid:-translate-y-5'
                            >
                                Confirm Password
                            </label>
                            
                            {/* The button to toggle the view of the password */}
                            <span 
                                className="padLock absolute top-2 right-2"
                                onClick={
                                    (e) => {
                                        //Toggle the password bisibility
                                        setConfirmPasswordVisible(confirmPasswordVisible => !confirmPasswordVisible);
                                        confirmPasswordField.current.type = confirmPasswordVisible ? 'password' : 'text';
                                    }
                                }
                                >
                                    {confirmPasswordVisible ? 
                                    <i className="fa-sharp fa-solid fa-eye"></i>
                                    : <i className="fa-sharp fa-solid fa-eye-slash"></i>}
                            </span>

                            {!validConfPassword && <div className="peer mt-2 text-xs">
                                The value of the password field should be equal to the confirm password field.
                            </div>}
                        </div>

                        <div 
                        className="signUpButton">
                            <button 
                            type="submit"
                            // This form will be disabled if the password field is less than 6 or the confirm password field is not equal to the password field
                            // Or if the username or email already exist in the database
                            disabled={userExist || emailExist || !validConfPassword}
                            className='poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack'
                            >
                                Register
                            </button>
                        </div>

                        {/* Signing up wih a federated identity provider */}
                        <div className="federatedIdentity mt-5 flex flex-col sm:flex-row gap-3">

                        <GoogleSignIn/>
                        <GithubSignIn/>

                    </div>

                        <div className="register flex justify-center items-center mt-5">
                            <p
                            className='poppins-light text-gray text-sm'
                            >Already have an Account ? 
                                &nbsp;

                                <Link 
                                to=".."
                                relative='path'
                                className='poppins-bold text-fullBlack'
                                >
                                    Login
                                </Link>
                                </p>
                        </div>
                    </Form>

                </div>

                <div className="flex flex-col items-center justify-center md:w-1/2">
                    <div 
                        className="sideImage hidden md:flex">
                        <img 
                        src={sideImg} 
                        alt="A team sharing their notes"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}