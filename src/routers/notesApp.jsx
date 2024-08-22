import React, { useRef, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import "../output.css";

import {db, auth } from "../auth/firebase";
import Header from "../app/Header";
import MainContainer from "../app/MainContainer";

import {userContext} from '../contexts/userContext'
import {userNotes} from '../contexts/notesContext'
import {themeContext} from '../contexts/themeContext'

import { doc, collection, onSnapshot } from "firebase/firestore";

// const currentUser = auth.currentUser;



let loader;


function NotesApp() {
  const navigate = useNavigate();
  
  const [userId, setUserId] = useState('');

  loader = onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login");
    }
    // Add a functionality to check the current state of the darkmode theme and reconcile if there is a conflict with local storage.
  });

  //The state for dark theme
  const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem('darkTheme')) || false);


  // State to monitor hamburger
  const [hamburgerState, setHamburgerState] = useState(false);
  // State to monitor the mobileSearchInput
  const [mobileSearchInput, setMobileSearchInput] = useState(false);
  const [userData, setUserData] = useState({} || localStorage.getItem(user));
  const [notes, setNotes] = useState([] || localStorage.getItem('notes'));
  //The search value state to monitor the search value
  const [searchValue, setSearchValue] = useState('')
  //State to force update of outlet function
  const [forceChange, setForceChange] = useState(0)

  useEffect(() => {
    //Set the dark-color-mode of the html element.
    let rootElem = document.querySelector(":root");
    let rootClass = rootElem.classList;
    //Set the mode of the html element for cases
    rootElem.setAttribute('data-color-mode', 'light')
    const darkTheme = JSON.parse(localStorage.getItem('darkTheme'));
    if (darkTheme) {
      // add the dark theme
      rootClass.add("dark");
      rootElem.setAttribute('data-color-mode', 'dark')
    } else if (!darkTheme && rootClass.contains("dark")) {
      // remove the dark theme
      rootClass.remove("dark");
      rootElem.setAttribute('data-color-mode', 'light')
    }
  }, [darkTheme])

  useEffect(() => {
    if(userId !== '') return;
    const userAuth = onAuthStateChanged(auth, (user) => {
      // if user is not null, then we will get the userid
      if(user && userId === '') {
        setUserId(user.uid);
        // console.log('This is the user id', user.uid);
      }
    })

    return () => userAuth()
  })

  useEffect(() => {
    if(!userData.uid || userData.uid === '') return;
    const unsub = onSnapshot(collection(db, `users/${userData.uid}/notes`), (querySnapshot) => {
        const notes = []
        querySnapshot.forEach((doc) => {
            notes.push(doc.data())
        })
        notes.sort((a, b) => b.dateUpdated - a.dateUpdated)
        console.log('Attemepting to check if our note here was updated')
        setNotes(notes)
    })

    return () => unsub()
  }, [userData])
   

  useEffect(() => {
    //This sets the user data
    if(userId === '') return;
    const userRef = doc(db, `users`, userId);
    const unsub = onSnapshot(userRef, (doc) => {
      setUserData(doc.data());
      localStorage.setItem('userData',JSON.stringify(doc.data()));
    });
    return () => unsub();
  },[userId])

 

  // our reference to our dropdown element.
  let dropDown = useRef(null);
  // creating a reference to our hamburger element
  let hamburger = useRef(null);
  let hamburgerContainer = useRef(null);
  //The immediately following ref is used by the mobileSearchInput
  let searchInputRef = useRef(null);
  let hamSearchInput = useRef(null);

  function closeHam(e) {
    if (hamburgerState && !dropDown?.current?.contains(e.target)) {
      // set the hamburger state to false
      setHamburgerState(false);
    }
  }

  function resizeObserver() {
    // if we are formerly under the viewport for smaller screens and then we decide to increase the width and height of the viewport
    // while the mobileSearchInput is still being displayed, then hide it.
    if (window.innerWidth >= 639 && mobileSearchInput) {
      setMobileSearchInput(false);

      searchInputRef.current.target.textContent = "";
    }
  }

  //Using useEffect to detect changes in our theme state
  useEffect(() => {
    // create an hamburger such that clicking anywhere outside the dropdown will close the dropdown when the dropdown is open
    // but clicking the profile picture when the dropdown is not being displayed will display the dropDown.

    document.addEventListener("click", closeHam);

    // create a resize event to monitor and checks if the width and height parameters of the window has been changed.
    // and then based on then decides to hide the mobileSearchInput and clear the contents if the browser document window is greater than 640px

    window.addEventListener("resize", () => {
      resizeObserver();
    });

    return () => {
      document.removeEventListener("click", closeHam);
      window.removeEventListener("resize", () => {
        resizeObserver();
      });
    };
  }, [hamburgerState, mobileSearchInput]);

  async function handleSignOut() {
    await signOut(auth);
    navigate("/login");
  }

  function mobileInput() {
    if (window.innerWidth < 640) {
      // i want to display the mobileSearch input
      // but if the window is resized, i want to close the mobileSearch input and clear all its contents
      // and that will be done under the useEffect

      // we will then change a state which will then enable our input to be displayed.
      setMobileSearchInput(true);
    }
  }

  return (
    <userContext.Provider value={{userData, setUserData}} >
      <userNotes.Provider value={{notes, setNotes}}>
        <themeContext.Provider value={{darkTheme, setDarkTheme}}>
          <div className="flex flex-col h-dvh relative">

            <Header
              mobileInput={mobileInput}
              mobileSearchInput={mobileSearchInput}
              setMobileSearchInput={setMobileSearchInput}
              handleSignOut={handleSignOut}
              hamburgerState={hamburgerState}
              setHamburgerState={setHamburgerState}
              hamburger={hamburger}
              dropDown={dropDown}
              hamburgerContainer={hamburgerContainer}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />

            {/* This is the main section of the body */}
            <MainContainer
              mobileSearchInput={mobileSearchInput}
              setMobileSearchInput={setMobileSearchInput}
              searchInputRef={searchInputRef}
              hamSearchInput={hamSearchInput}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              forceChange={forceChange}
              setForceChange={setForceChange}
            />

          </div>
        </themeContext.Provider>
      </userNotes.Provider>
    </userContext.Provider>
  );
}

export { NotesApp, loader };
