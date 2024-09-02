// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    connectAuthEmulator,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signInWithRedirect,
} from 'firebase/auth'

import { 
    getFirestore, 
    collection,
    getDocs,
    getDoc,
    addDoc,
    query,
    where,
    setDoc,
    connectFirestoreEmulator,
    initializeFirestore, 
    persistentLocalCache, 
    persistentMultipleTabManager,
    CACHE_SIZE_UNLIMITED
} from 'firebase/firestore'

import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVVLoYFhb2Vrvm7T8-poauJt6XqE-ZpGQ",
  authDomain: "notesapp-e0253.firebaseapp.com",
  projectId: "notesapp-e0253",
  storageBucket: "notesapp-e0253.appspot.com",
  messagingSenderId: "963543362621",
  appId: "1:963543362621:web:86c32ba90844fef9fc0e54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const db = getFirestore(app);
export let db
try {
    db = initializeFirestore(app, {
        localCache: persistentLocalCache({
            tabManager: persistentMultipleTabManager(),
            cacheSizeBytes: CACHE_SIZE_UNLIMITED,
        })
    });
    console.log('Firestore persistence enabled');
} catch (err) {
    if (err.code === 'failed-precondition') {
        console.error('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
        console.error('The current browser does not support all of the features required to enable persistence');
    } else {
        console.error('Error enabling Firestore persistence:', err);
    }
}
localStorage.setItem('isPersistence', 'yes');
export const userRef = collection(db, 'users')

// Use multi-tab IndexedDb persistence for offline-data persistence

// initializeFirestore(app, {
//     localCache: persistentLocalCache({
//         tabManager: persistentMultipleTabManager()
//     })
// });
// The following line connects me to my emulator
connectAuthEmulator(auth, 'http://localhost:9099');
connectFirestoreEmulator(db, '127.0.0.1', 8080);
const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "127.0.0.1", 5001);

// update the firestore settings
// db.settings({timestampsInSnapshots: true});

export async function signUp(email, password) {
    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        const newUserId = newUser.user.uid;
        console.log('This is the logged in-user id',newUserId, newUser.user);
        // Return the user's id that will be used for creating the user's database
        return newUser
    } catch(error) {
        const errorCode = error.code;
        //Display the corresponding error to the user based on the error codes
        const errorDiv = document.querySelector('.error-div');
        if(errorCode === 'auth/email-already-in-use') {
            //Set the contents
            errorDiv.textContent = `Email is being used by another user`;
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
        } else if (errorCode === 'auth/invalid-email') {
            //Set the contents
            errorDiv.textContent = `Invalid email`;
            //Remove the hidden class to display the error
            errorDiv.classList.remove('hidden')
            //Set a timeout to later hide the error div
            setTimeout(() => {
                errorDiv.classList.add('hidden')
            }, 4000)
        } else if(errorCode === 'auth/weak-password') {
            //Set the contents
            errorDiv.textContent = `The password used is too weak`;
            //Remove the hidden class to display the error
            errorDiv.classList.remove('hidden')
            //Set a timeout to later hide the error div
            setTimeout(() => {
                errorDiv.classList.add('hidden')
            }, 4000)
        } else {
           //Set the contents
           errorDiv.textContent = error.message;
           //Remove the hidden class to display the error
           errorDiv.classList.remove('hidden')
           //Set a timeout to later hide the error div
           setTimeout(() => {
               errorDiv.classList.add('hidden')
           }, 4000) 
        }
        //Log the error
        console.error(error.code, error.message)

    }
}

export async function storeUsername(username, email, newUserId) {
    // we store the username and email in the database
    const docRef = await setDoc(doc(db, 'users', newUserId), {
        username: username,
        email: email,
        uid: newUserId,
        profilePic: 'https://res.cloudinary.com/drlrawk5w/image/upload/v1724100934/profilePic_gxon9j.webp',
    })
}

// function to check fields to avoid duplication and errors.
export async function crossCheckField(type , value) {
    let found = false;
    console.log(type,value)
    // we crosscheck the email in the database
    const q = query(userRef, where(type, '==', value));
    // we try to see if we have any user
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
        let data = doc.data();
        if(data[type] === value) {
            console.log(true);
            found = true;
        } else{
            console.log(false);
        }
    })
    return found;
}

// get the email from the passed in username for implementing login
export async function returnEmail(value) {
    console.log(value);
    let email = '';
    const q = query(userRef, where('username', '==', value))
    // we will try to see if we have any user that has that specific username then we will return the associated email for login
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
        let data = doc.data();
        email = data.email;
    })
    console.log(email)
    return email;
}
 
