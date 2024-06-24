import React, {
    useEffect,
    useRef,
    useState
} from 'react';

import {
    Form,
    Link,
    useNavigate,
} from 'react-router-dom'

import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';

import sideImg from '/images/small-team.png'

import GithubSignIn  from '../GithubSignIn';
import GoogleSignIn from '../GoogleSignIn';

import {
    crossCheckField,
    returnEmail,
    auth
} from '../firebase'

export async function action({request}){
    const formData = await request.formData();
    // We destructure the email and password from the form data
    const {username, password} = Object.fromEntries(formData);
    // We get the email from the username
    const email = await returnEmail(username);
    console.log(email, password);
    // sign in the user with the credentials gotten
    signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Incase of any error, show us the error
        console.log(errorCode, errorMessage);
    });
    return 'success';
} 


export default function Login() {
    // we initialize the navigate hook
    const navigate = useNavigate();

    // we intentionally set the userDoesNotExist variable to a default of false
    const [userDoesNotExist, setUserDoesNotExist] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const inputEl = useRef(null)

    console.log(userDoesNotExist, passwordVisible)

    // async function handleSubmit(e) {
    //     let button = e.target.querySelector('button[type="submit"]');
    //     try{
    //         // disable the button to prevent multiple clicks
    //         button.disabled = true;

    //         const data = new FormData(e.target);
    //         const formData = Object.fromEntries(data);
            
    //         const password = formData.password;
    //         console.log(email, password);
    //         // sign in the user with the credentials gotten
    //         signInWithEmailAndPassword(auth, email, formData.password)
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // Incase of any error, show us the error
    //             console.log(errorCode, errorMessage);
    //           });
    //     }catch(err) {
    //         // remove the disabled attribute from the button
    //         button.disabled = false;
    //         console.log(err)
    //     }
    // }


    async function handleInput(type, value) {
        const foundUser = await crossCheckField(type, value);
        // negate the passed in response
        setUserDoesNotExist(!foundUser)
        console.log(foundUser)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                
                navigate('/');
            }else{
                console.log('user not signed in!')
            }
        })
    }, [])
  return (
    <div className='flex flex-col h-dvh items-center justify-center sm:items-start sm:justify-start'>

        <header className='sm:px-8 sm:pt-10 sm:text-left text-center'>
            <h1 className='poppins-medium justify-self-start self-start text-fullBlack poppins-medium text-xl md:pb-0'>Your Logo</h1>
        </header>
        
        <div className='login flex sm:flex-grow flex-col md:flex-row p-7 justify-center items-center'>

            <div className="flex flex-col items-center justify-center md:w-2/5">
                
                <div 
                    className="sideImage hidden md:flex">
                    <img 
                    src={sideImg} 
                    alt="A team sharing their notes"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center md:justify-center md:items-center w-full md:w-1/2">
                
                <Form
                method='post'
                // onSubmit={(e) => {
                //     e.preventDefault;
                //     // calling the function that handles the submition of the form
                //     handleSubmit(e);
                // }}
                className='w-full sm:w-[90%] md:w-4/5'
                >
                    <h2 className='poppins-semibold text-3xl mb-5'>Sign in</h2>
                    <div className="userNameField relative mb-8">
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className='h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md'  
                            required
                            onChange={(e) => {
                                e.preventDefault;
                                const id = e.target.getAttribute('id')
                                const value = e.target.value;
                                setUserDoesNotExist(true)
                                handleInput(id, value)
                            }
                            } 
                        />

                        <label 
                            htmlFor="username" 
                            className='poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                            peer-valid:-translate-y-5'
                        >Username</label>

                        {/* our default error*/}
                        {userDoesNotExist && <div className="text-xs">
                            This username does not exist
                        </div>}
                    </div>

                    <div className="passwordField relative mb-4">
                        <input 
                            type="password"
                            id="password" 
                            name="password" 
                            className='h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md'
                            required
                            ref={inputEl}
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
                                    inputEl.current.type = passwordVisible ? 'password' : 'text';
                                }
                            }
                            >
                                {passwordVisible ? 
                                <i className="fa-sharp fa-solid fa-eye"></i>
                                : <i className="fa-sharp fa-solid fa-eye-slash"></i>}
                        </span>
                    </div>

                    <div className="loginMetaData flex flex-row items-center justify-between mb-5">
                        <div className="remember flex justify-center items-center">
                            <input 
                            type="checkbox" 
                            name="rememberMe" 
                            id="rememberMe" 
                            defaultChecked={false}
                            className='w-5 h-5 accent-fullBlack'
                            />
                                &nbsp;
                            <label htmlFor="rememberMe">
                                Remember me
                            </label>
                        </div>

                        <div className="forgotPassword">
                            Forgot Password?
                        </div>
                    </div>

                    <div 
                    className="loginButton">
                        <button 
                        type="submit"
                        className='poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack'
                        >
                            Login
                        </button>
                    </div>

                    {/* Registering with a federated identity provider */}
                    <div className="federatedIdentity mt-5 flex flex-col sm:flex-row gap-3">
                        <GoogleSignIn />
                        <GithubSignIn />
                    </div>

                    <div className="register flex justify-center items-center mt-5">
                        <p
                        className='poppins-light text-gray text-sm'
                        >Don't have an Account ? 
                            &nbsp;

                            <Link 
                            to="/signup"
                            className='poppins-bold text-fullBlack'
                            >Register</Link>
                            </p>
                    </div>
                </Form>

            </div>
        </div>
    </div>
  );
}