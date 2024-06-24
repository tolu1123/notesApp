import React, {useState, useEffect} from 'react';

import {auth} from './firebase';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult} from 'firebase/auth';

// import the images for the federated identity providers
import googleLogo from './../public/images/google-logo-sm.png';
import { set } from 'firebase/database';

export default function GoogleSignIn() {

    // This is used to keep track of whether the user has clicked the sign in button or not.
    let [clickedSignIn, setClickedSignIn] = useState(false);

    function signIn() {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);

        // We will set the clickedSignIn to true to indicate that the user has clicked the sign in button
        setClickedSignIn(true);
    }

    async function getResult() {
        try {
            const result = await getRedirectResult(auth);
            if (result) {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                console.log('User Info:', user);
            }
        } catch(error) {
            console.error('Error during sign-in:', error.code, error.message);
        };
    }

    useEffect(() => {
        // We will check if the user has clicked the sign in button
        // before we getting the redirect result from the sign in operation
        if(clickedSignIn) {
            getResult();
        }
    }, [])

    return (
        <button 
        type="button"
        className='sm:w-1/2 hover:bg-black hover:text-white h-fit flex justify-center items-center py-2 px-2 border border-solid border-lessBlack rounded-md'
        onClick={signIn}
        >
            <img
            width={25}
            height={25} 
            className='inline-block mr-2'
            src={googleLogo} 
            alt="Google Logo" 
            />
            <span>Sign in with Google</span>

        </button>
    )
}