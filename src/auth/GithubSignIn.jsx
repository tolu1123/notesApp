import React from "react";

import { GithubAuthProvider, signInWithPopup, signInWithCustomToken, linkWithCredential } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

import { auth, crossCheckField, storeUsername } from "./firebase";



import githubLogo from "/images/github-logo-sm.png";
import githubLogoWhite from "/images/github-logo-sm-white.png";

export default function GithubSignIn() {
  function githubSignIn() {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // User is signed in.
        const user = result.user;
        console.log("User Info:", user);
        // You can also get the GitHub Access Token if needed.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("GitHub Access Token:", token);

        async function checkUserData() {
          const isUserDataAvailable = await crossCheckField(
            "email",
            user.email
          );
          console.log(isUserDataAvailable);
          if (isUserDataAvailable === false) {
            let username = user.displayName;
            storeUsername(username, user.email, user.uid);
          }
        }
        checkUserData();
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
        if (error.code === 'auth/account-exists-with-different-credential') {
          // The email of the user's account used.
          const email = error.customData.email;
          // Get the pending credential
          let pendingCred = error.credential;
          //Preparing to use cloud functions
          const functions = getFunctions();
          //Ask for the linkAccounts function
          const linkAccounts = httpsCallable(functions, 'linkAccounts');
          //Call the function with the email and the pending credential
          linkAccounts({email: email}).then((result) => {

            //If the cloud function works, then we will use the received customToken to sign the user in
            const customToken = result.data.customToken;
            console.log('Successfully received the custom token:', customToken);
            //Sign the user in with the customToken
            signInWithCustomToken(auth, customToken).then(result => {
              // User is signed in.
              const user = result.user;
              console.log('USER signing in successfully:', user.email)
              //Link the user with the credential
              linkWithCredential(user, pendingCred).then(result => {
                //The user is now linked with the credential
                console.log('User is now linked with the credential');
              }).catch((error) => {
                console.error("Error during linking the user with the credential:", error);
              });
            }).catch(error => {
              console.error("Error during sign-in with custom token:", error);
            })
          }).catch(error => {
            console.log('Error from the cloud function:', error)
          })
        
        }
      });
    console.log("clicked on the sign in button");
  }

  return (
    <>
      <button
        type="button"
        className="sm:w-1/2 h-fit group hover:bg-black hover:text-white flex justify-center items-center py-2 px-2 border border-solid border-lessBlack rounded-md"
        onClick={githubSignIn}
      >
        <img
          width={25}
          height={25}
          className="inline-block mr-2 group-hover:hidden"
          src={githubLogo}
          alt="Apple Logo"
        />

        {/* The second image will only appear upon hovering */}
        <img
          width={25}
          height={25}
          className="group-hover:inline-block mr-2 hidden"
          src={githubLogoWhite}
          alt="Apple Logo"
        />
        <span>Sign in with Github</span>
      </button>
    </>
  );
}
