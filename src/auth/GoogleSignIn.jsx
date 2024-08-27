import React from "react";

import { auth, crossCheckField, storeUsername } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithCustomToken, linkWithCredential} from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

// import the images for the federated identity providers
import googleLogo from "/images/google-logo-sm.png";

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
        console.log(typeof user);

        async function checkUserData() {
          console.log(user);
          const isUserDataAvailable = await crossCheckField(
            "email",
            user.email
          );
          if (isUserDataAvailable === false) {
            let username = user.displayName;
            storeUsername(username, user.email, user.uid);
          }
        }
        checkUserData();
      })
      .catch((error) => {
        console.error("Error during sign-in:", error.code, error.message);

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
  }

  return (
    <button
      type="button"
      className="w-full hover:bg-black hover:text-white h-fit flex justify-center items-center py-2 px-2 border border-solid border-lessBlack rounded-md"
      onClick={signIn}
    >
      <img
        width={25}
        height={25}
        className="inline-block mr-2"
        src={googleLogo}
        alt="Google Logo"
      />
      <span>Sign in with Google</span>
    </button>
  );
}
