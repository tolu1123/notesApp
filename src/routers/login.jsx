import React, { useEffect, useRef, useState } from "react";

import { Form, Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence, browserLocalPersistence} from "firebase/auth";

import sideImg from "/images/small-team.png";

import GithubSignIn from "../auth/GithubSignIn";
import GoogleSignIn from "../auth/GoogleSignIn";

import { crossCheckField, returnEmail, auth } from "../auth/firebase";

export async function action({ request }) {
  const formData = await request.formData();
  // We destructure the email and password from the form data
  const { username, password, rememberMe } = Object.fromEntries(formData);
  // We get the email from the username
  const email = await returnEmail(username);
  console.log(email, password, rememberMe);
  //We will use the state of the rememberMe to determine if we should remember the user or not && also determine the level of the data persistence
  if(rememberMe === 'on'){
    await setPersistence(auth, browserLocalPersistence)
  } else {
    await setPersistence(auth, browserSessionPersistence)
  }
  // sign in the user with the credentials gotten
  await signInWithEmailAndPassword(auth, email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Incase of any error, show us the error
    console.log(errorCode, errorMessage);
    //Show the error-div for the corresponding error codes
    const errorDiv = document.querySelector('.error-div');
    if(errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-credential' || errorCode === 'auth/invalid-email') {
      //Set the contents
      errorDiv.textContent = `Invalid login details`;
      //Remove the hidden class to display the error
      errorDiv.classList.remove('hidden')
      //Set a timeout to later hide the error div
      setTimeout(() => {
        errorDiv.classList.add('hidden')
      }, 4000)
    } else if (errorCode === 'auth/network-request-failed') {
      //Set the contents
      errorDiv.textContent = `Please check your network connection`;
      //Remove the hidden class to display the error
      errorDiv.classList.remove('hidden')
      //Set a timeout to later hide the error div
      setTimeout(() => {
        errorDiv.classList.add('hidden')
      }, 4000)
    } else if (errorCode === 'auth/user-not-found') {
      //Set the contents
      errorDiv.textContent = `No user was found`;
      //Remove the hidden class to display the error
      errorDiv.classList.remove('hidden')
      //Set a timeout to later hide the error div
      setTimeout(() => {
        errorDiv.classList.add('hidden')
      }, 4000)
    }else {
      //Set the contents
      errorDiv.textContent = errorMessage;
      //Remove the hidden class to display the error
      errorDiv.classList.remove('hidden')
      //Set a timeout to later hide the error div
      setTimeout(() => {
        errorDiv.classList.add('hidden')
      }, 4000)
    }
  });
  return "success";
}

export default function Login() {
  // we initialize the navigate hook
  const navigate = useNavigate();

  // we intentionally set the userDoesNotExist variable to a default of false
  const [userDoesNotExist, setUserDoesNotExist] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const inputEl = useRef(null);


  //This state is used to store the data of a user when a user logins
  // if the user's data has not been stored, we will then store it using the auth listener
  const [user, setUserData] = useState({});

  async function handleInput(type, value) {
    const foundUser = await crossCheckField(type, value);
    // negate the passed in response
    setUserDoesNotExist(!foundUser);
    console.log(foundUser);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        console.log("user not signed in!");
      }
    });
  }, [user]);

  return (
    <>
      {/* A div for the errors */}
      <div className="error-div absolute right-5 top-5 text-red border border-solid rounded-md border-red text-base py-4 px-6 mt-5 hidden">
        
      </div>

      <div className="flex flex-col h-dvh items-center justify-center sm:items-start sm:justify-start">
        <header className="sm:px-8 sm:pt-10 sm:text-left text-center">
          <h1 className="fake-logo poppins-medium justify-self-start self-start text-fullBlack text-xl md:pb-0">
            NotesApp
          </h1>
        </header>

        <div className="login flex sm:flex-grow flex-col md:flex-row p-7 justify-center items-center">
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
              <h2 className="poppins-semibold text-3xl mb-5">Sign in</h2>
              <div className="userNameField relative mb-8">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md"
                  required
                  onChange={(e) => {
                    e.preventDefault;
                    const id = e.target.getAttribute("id");
                    const value = e.target.value;
                    setUserDoesNotExist(true);
                    handleInput(id, value);
                  }}
                />

                <label
                  htmlFor="username"
                  className="poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                              peer-valid:-translate-y-5"
                >
                  Username
                </label>

                {/* our default error*/}
                {userDoesNotExist && (
                  <div className="text-xs text-red">This username does not exist</div>
                )}
              </div>

              <div className="passwordField relative mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md"
                  required
                  ref={inputEl}
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
                    inputEl.current.type = passwordVisible ? "password" : "text";
                  }}
                >
                  {passwordVisible ? (
                    <i className="fa-sharp fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-sharp fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>

              <div className="loginMetaData flex flex-row items-center justify-between mb-5">
                <div className="remember flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="w-5 h-5 accent-fullBlack"
                  />
                  &nbsp;
                  <label htmlFor="rememberMe">Remember me</label>
                </div>

                <Link to="/forgot-password" className="text-fullBlack inter-regular forgotPassword">
                  Forgot password?
                </Link>
              </div>

              <div className="loginButton">
                <button
                  type="submit"
                  className="poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack"
                >
                  Login
                </button>
              </div>

              {/* Registering with a federated identity provider */}
              <div className="federatedIdentity mt-5 flex flex-col sm:flex-row gap-3">
                <GoogleSignIn setUserData={(user) => setUserData(user)} />
                {/* <GithubSignIn setUserData={(user) => setUserData(user)} /> */}
              </div>

              <div className="register flex justify-center items-center mt-5">
                <p className="poppins-light text-gray text-sm">
                  Don't have an Account ? &nbsp;
                  <Link to="/signup" className="poppins-bold text-fullBlack">
                    Register
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
