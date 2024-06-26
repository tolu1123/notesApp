import React, {useState, useEffect} from 'react';

import { GithubAuthProvider, signInWithRedirect, getRedirectResult} from 'firebase/auth';

import {auth} from './firebase';

import githubLogo from './../public/images/github-logo-sm.png';
import githubLogoWhite from './../public/images/github-logo-sm-white.png';

export default function GithubSignIn() {

    // This is used to keep track of whether the user has clicked the sign in button or not.
    let [clickedSignIn, setClickedSignIn] = useState(false);

    function googleSignIn() {
        const provider = new GithubAuthProvider();
        signInWithRedirect(auth, provider);
        console.log('clicked on the sign in button');

        // We will set the clickedSignIn to true to indicate that the user has clicked the sign in button
        setClickedSignIn(true);
    }
    async function getResult() {
        try {
            const result = await getRedirectResult(auth);
            if (result) {
              // User is signed in.
              const user = result.user;
              console.log('User Info:', user);
              // You can also get the GitHub Access Token if needed.
              const credential = GithubAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              console.log('GitHub Access Token:', token);
            }
          } catch (error) {
            console.error('Error during sign-in:', error);
          }
    }

    useEffect(() => {
        // We will check if the user has clicked the sign in button
        // before we getting the redirect result from the sign in operation
        console.log('We are here now', 'get result')
        if(clickedSignIn) {
            getResult();
        }
    },[clickedSignIn])


    return (
        <>
            <button 
            type="button"
            className='sm:w-1/2 h-fit group hover:bg-black hover:text-white flex justify-center items-center py-2 px-2 border border-solid border-lessBlack rounded-md'
            onClick={googleSignIn}
            >
                <img
                width={25}
                height={25} 
                className='inline-block mr-2 group-hover:hidden'
                src={githubLogo} 
                alt="Apple Logo" 
                />

                {/* The second image will only appear upon hovering */}
                <img
                width={25}
                height={25} 
                className='group-hover:inline-block mr-2 hidden'
                src={githubLogoWhite} 
                alt="Apple Logo" 
                />
                <span>Sign in with Github</span>
            </button>
</>
    )
}