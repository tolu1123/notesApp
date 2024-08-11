import React from 'react';

import { GithubAuthProvider, signInWithPopup} from 'firebase/auth';

import {auth} from './firebase';

import githubLogo from '/images/github-logo-sm.png';
import githubLogoWhite from '/images/github-logo-sm-white.png';

export default function GithubSignIn() {
 

    function githubSignIn() {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // User is signed in.
            const user = result.user;
            console.log('User Info:', user);
            // You can also get the GitHub Access Token if needed.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log('GitHub Access Token:', token);
        }).catch((error) => {
              console.error('Error during sign-in:', error);
        })
        console.log('clicked on the sign in button');

    }
    


    return (
        <>
            <button 
            type="button"
            className='sm:w-1/2 h-fit group hover:bg-black hover:text-white flex justify-center items-center py-2 px-2 border border-solid border-lessBlack rounded-md'
            onClick={githubSignIn}
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