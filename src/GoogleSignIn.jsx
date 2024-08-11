import React from 'react';

import {auth} from './firebase';
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

// import the images for the federated identity providers
import googleLogo from '/images/google-logo-sm.png';

export default function GoogleSignIn() {

    function signIn() {
        // Signing the user in with signInWithPopup
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                console.log('User Info:', user);
            }).catch((error) => {
                console.error('Error during sign-in:', error.code, error.message);
            })
    }


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