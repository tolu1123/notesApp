// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
} from 'firebase/firestore'

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


export const db = getFirestore(app);
export const userRef = collection(db, 'users')

// The following line connects me to my emulator
// connectAuthEmulator(auth, 'http://localhost:9099');
// connectFirestoreEmulator(db, '127.0.0.1', 8080);


// update the firestore settings
// db.settings({timestampsInSnapshots: true});

export async function signUp(email, password) {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    const newUserId = newUser.user.uid;
    console.log('This is the logged in-user id',newUserId, newUser.user);
    // Return the user's id that will be used for creating the user's database
    return newUserId
}

export async function storeUsername(username, email, newUserId) {
    // we store the username and email in the database
    const docRef = await setDoc(doc(db, 'users', newUserId), {
        username: username,
        email: email
    })
    // console.log('Document written with ID: ', docRef.id);
}

// function to check fields to avoid duplication and errors.
export async function crossCheckField(type , value) {
    let found = false;
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