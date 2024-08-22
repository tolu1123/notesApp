import React, { useEffect, useState } from "react";
import { Form, useNavigate, redirect } from "react-router-dom";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import sideImg from "/images/small-team.png";
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

        // We use this to direct the user to the login page
        return redirect('/createNewPassword');

    }catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        // Handle error, e.g., show an error message
        return {
            success: false,
            error: errorMessage
        };
    };
    }
}

export default function ForgotPassword() {
  // we initialize the navigate hook
  const navigate = useNavigate();

  //This state is used to store the data of a user when a user logins
  // if the user's data has not been stored, we will then store it using the auth listener
  const [email, setEmail] = useState('');

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

  return (
    <div className="flex flex-col h-dvh items-center justify-center sm:items-start sm:justify-start">
      <header className="sm:px-8 sm:pt-10 sm:text-left text-center">
        <h1 className="poppins-medium justify-self-start self-start text-fullBlack poppins-medium text-xl md:pb-0">
          Your Logo
        </h1>
      </header>

      <div className="login flex sm:flex-grow flex-col md:flex-row p-7">
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
                className="poppins-medium text-white bg-accent-fullBlack w-full py-3 rounded-md hover:bg-accent-lessBlack transition duration-200 ease-linear bg-fullBlack"
              >
                Send Reset Email
              </button>
            </div>
         
          </Form>
        </div>
      </div>
    </div>
  );
}
