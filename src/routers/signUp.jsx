import React, { useRef, useState, useEffect } from "react";

import { useNavigate, Link, Form, redirect } from "react-router-dom";

import {
  signUp,
  storeUsername,
  userRef,
  crossCheckField,
  auth,
} from "../auth/firebase";

import GithubSignIn from "../auth/GithubSignIn";
import GoogleSignIn from "../auth/GoogleSignIn";


import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged, sendEmailVerification} from "firebase/auth";

export async function action({ request, params }) {
  const formData = await request.formData();
  console.log(formData);

  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  console.log(username, email, password, confirmPassword);

  if (
    username.value !== "" &&
    email.value !== "" &&
    password.length > 6 &&
    confirmPassword === password
  ) {
    try {
      // sign up the user
      // We will receive the user's id when signup is acheived.
      let newUser = await signUp(email, password);

      // store the username and email in the database
      await storeUsername(username, email, newUser.user.uid);
      console.log(username, email, password);

      console.log(newUser, 'What is undefined')
      //Here we will send a verification email to the user
      await sendEmailVerification(newUser.user);

      return redirect(`/account-registered?email=${email}`);
    } catch (error) {
      console.log(error,'Something went wrong here!');
      return redirect('/sign-up');
    }
  }else {
    console.log('Failed to sign up');
    return redirect('/sign-up');
  }

}

import sideImg from "/images/small-team.png";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const passwordField = useRef(null);
  const confirmPasswordField = useRef(null);
  const [password, setPassword] = useState(true);
  const [validConfPassword, setValidConfPassword] = useState(true);

  const navigate = useNavigate();


  const [username, setUsername] = useState('');
  const [passwordVal, setPasswordVal] = useState('');
  const [confPaswordVal, setConfPasswordVal] = useState('');
  const [emailVal, setEmailVal] = useState('')

  const errorDiv = useRef(null)



  useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        if(user.emailVerified) {
          navigate('/');
        }else {
          //We will inform the user to verify his or her mail.
          console.log('Verify your mail o.')
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


  async function checkField(e, type, value) {
    let element = e.target;
    console.log(type, value);
    const val = await crossCheckField(type, value);
    console.log("crossChecker", val);
    //If the user exists we will notify the user that a user exists with the filled-in username
    type === "username" ? setUserExist(val) : null;
  }

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

        <div className="form-mail login flex sm:flex-grow flex-col-reverse md:flex-row p-7 justify-center items-center transition-all duration-100 ease-linear">
          <div className="w-full flex flex-col items-center md:justify-center md:items-center md:w-1/2">
            <Form
              method="post"
              autoComplete="off"
              className="w-full sm:w-[90%] md:w-4/5"
            >
              <h2 className="poppins-semibold text-3xl mb-5">Sign up!</h2>

              <div className="userNameField relative mb-5">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm"
                  required
                  value={username}
                  onChange={(e) => {
                    setUserExist(true);
                    const elementId = e.target.getAttribute("id");
                    const elementVal = e.target.value;
                    async function check() {
                      await checkField(e, elementId, elementVal);
                    }
                    check();
                    setUsername(elementVal);
                  }}
                />

                <label
                  htmlFor="username"
                  className="poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                                  peer-valid:-translate-y-5"
                >
                  Username
                </label>

                {userExist && (
                  <div className="text-xs">This username already exist.</div>
                )}
              </div>

              <div className="emailField relative mb-5">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm"
                  required
                  value={emailVal}
                  onChange={(e) => {
                    setEmailVal(e.target.value);
                  }}
                />

                <label
                  htmlFor="email"
                  className="poppins-regular text-bold text-sm transition duration-200 ease-linear absolute left-2 top-2 peer-focus:-translate-y-5 bg-white
                                  peer-valid:-translate-y-5"
                >
                  Email
                </label>

              </div>

              <div className="passwordField relative mb-5">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="h-10 py-4 px-2 poppins-regular border border-solid border-lessBlack w-full peer focus:outline-none rounded-md text-sm"
                  required
                  ref={passwordField}
                  value={passwordVal}
                  onChange={(e) => {
                    setPassword(false);
                    // check if the value of the password field is greater than 6
                    if (e.target.value.length > 6) {
                      setPassword(true);
                    }
                    setPasswordVal(e.target.value)

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
                  value={confPaswordVal}
                  ref={confirmPasswordField}
                  onChange={(e) => {
                    setValidConfPassword(false);
                    // check if the value of the confirm password field is equal to the password field
                    if (
                      e.target.value.length > 6 &&
                      e.target.value === passwordField.current.value
                    ) {
                      setValidConfPassword(true);
                    }
                    setConfPasswordVal(e.target.value)
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
                  }}
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
                  // Or if the username or email already exist in the database
                  disabled={userExist || !validConfPassword}
                  className="poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack"
                >
                  Register
                </button>
              </div>

              {/* Signing up wih a federated identity provider */}
              <div className="federatedIdentity mt-5 flex flex-col sm:flex-row gap-3">
                <GoogleSignIn />
                {/* <GithubSignIn /> */}
              </div>

              <div className="register flex justify-center items-center mt-5">
                <p className="poppins-light text-gray text-sm">
                  Already have an Account ? &nbsp;
                  <Link
                    to="/login"
                    relative="path"
                    className="poppins-bold text-fullBlack"
                  >
                    Login
                  </Link>
                </p>
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
  );
}
