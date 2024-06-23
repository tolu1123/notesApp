import React, {
    useRef,
    useState,
    useEffect,
    useContext,
} from 'react';

import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import '../output.css'

import { userRef, auth } from '../firebase';

let loader;

 

import Header from '../Header';
import MainContainer from '../MainContainer';
function NotesApp() {
    const navigate = useNavigate();

    loader = onAuthStateChanged(auth, (user) => {
        if(!user) {
            navigate('/login')
        }

        // Add a functionality to check the current state of the darkmode theme and reconcile if there is a conflict with local storage.
    })
    
    const [darkTheme, setDarkTheme] = useState(false);

    // State to monitor hamburger
    const [hamburgerState, setHamburgerState] = useState(false);
    // State to monitor the mobileSearchInput
    const [mobileSearchInput, setMobileSearchInput] = useState(false);

    console.log(mobileSearchInput, 'mobileSearchInput')

    // our reference to our dropdown element.
    let dropDown = useRef(null);
    // creating a reference to our hamburger element
    let hamburger = useRef(null);
    let hamburgerContainer = useRef(null);
    //The immediately following ref is used by the mobileSearchInput
    let searchInputRef = useRef(null);
    let hamSearchInput = useRef(null);
 
    


    function closeHam(e) {
        if(hamburgerState && !dropDown?.current?.contains(e.target)){
            // set the hamburger state to false
            setHamburgerState(false);
        }
    }

    function resizeObserver() {
        // if we are formerly under the viewport for smaller screens and then we decide to increase the width and height of the viewport 
        // while the mobileSearchInput is still being displayed, then hide it.
        if(window.innerWidth >= 639 && mobileSearchInput) {
            setMobileSearchInput(false);

            searchInputRef.current.target.textContent = '';
        }
    }

    //Using useEffect to detect changes in our theme state
    useEffect(() => {
        let rootElem = document.querySelector(':root');
        let rootClass = rootElem.classList;
        if(darkTheme){
            // add the dark theme
            rootClass.add('dark')
        }else if(!darkTheme && rootClass.contains('dark')){
            // remove the dark theme
            rootClass.remove('dark')
        }


        
        // create an hamburger such that clicking anywhere outside the dropdown will close the dropdown when the dropdown is open
        // but clicking the profile picture when the dropdown is not being displayed will display the dropDown.

        document.addEventListener('click', closeHam);

        // create a resize event to monitor and checks if the width and height parameters of the window has been changed.
        // and then based on then decides to hide the mobileSearchInput and clear the contents if the browser document window is greater than 640px


        window.addEventListener('resize', () => {
            resizeObserver()
        })

        
        return () => {
            document.removeEventListener('click', closeHam);
            window.removeEventListener('resize',  () => {
                resizeObserver()
            })
        }
    }, [darkTheme, hamburgerState, mobileSearchInput])

    async function handleSignOut() {
        await signOut(auth);
        navigate('/login');
    }
    
    function mobileInput() {
        if(window.innerWidth < 640){
            // i want to display the mobileSearch input
            // but if the window is resized, i want to close the mobileSearch input and clear all its contents
            // and that will be done under the useEffect


            // we will then change a state which will then enable our input to be displayed.
            setMobileSearchInput(true);

        }
    }

    return (
        <div className='flex flex-col h-dvh'>
             

            <Header 
            mobileInput={mobileInput} 
            mobileSearchInput={mobileSearchInput} 
            setMobileSearchInput={setMobileSearchInput} 
            darkTheme={darkTheme} 
            setDarkTheme={setDarkTheme} 
            handleSignOut={handleSignOut} 
            hamburgerState={hamburgerState} 
            setHamburgerState={setHamburgerState} 
            hamburger={hamburger} 
            dropDown={dropDown} 
            hamburgerContainer={hamburgerContainer}
            />

            {/* This is the main section of the body */}
            <MainContainer 
            mobileSearchInput={mobileSearchInput}
            setMobileSearchInput={setMobileSearchInput}
            searchInputRef={searchInputRef}
            hamSearchInput={hamSearchInput}
            />
        </div>
    )
}

export { NotesApp, loader}

