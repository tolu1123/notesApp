import React,{useState, useEffect, useContext, useRef} from "react";

import '../output.css';
import { userContext } from "../contexts/userContext";
import { themeContext } from "../contexts/themeContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../auth/firebase";


// import the profile picture
import profilePic from "/images/profilePic.jpg";

export default function Header({
  mobileInput,
  mobileSearchInput,
  setMobileSearchInput,
  handleSignOut,
  hamburgerState,
  setHamburgerState,
  hamburger,
  dropDown,
  hamburgerContainer,
  searchValue,
  setSearchValue,
}) {

  const {userData, setUserData} = useContext(userContext);
  const {darkTheme, setDarkTheme} = useContext(themeContext);

  const profileRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(0);

  

  // Function to update the document
  async function updateUserData(updatedObj) {
    if(userData.uid) {
        const docRef = doc(db, `users/${userData.uid}`);
        await updateDoc(docRef, updatedObj);  
    }
  }

  

  useEffect(() => {
    if(selectedImg) {
      const url = 'https://api.cloudinary.com/v1_1/drlrawk5w/image/upload';
      const file = profileRef.current.files[0];

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'notesApplication');

      fetch(url, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          
          console.log(data.url, 'Returned from cloudinary');
          //Update the selected note content if the value changes
          setUserData(prevState => {
            let updatedContent = {...prevState,
              profilePic: data.url,
            }
            // The function to update the user data in firebase
            updateUserData(updatedContent)

            return updatedContent;
          });
        });
    }
  }, [selectedImg])

  console.log('userData',userData)

  return (
    <header className="flex flex-row justify-between items-center px-4 py-3 shadow-lg dark:bg-fullBlack border-solid dark:border-b dark:border-gray z-20 h-[80px]">
      <h1 className="fake-logo poppins-medium dark:text-white">NotesApp</h1>

      <div className="flex flex-row items-center inter-regular gap-5 ">
        {/* The search input functionality */}
        <div className="flex flex-row relative overflow-visible">
          <input
            className="search-note hidden sm:flex border dark:border-[1.5px] border-solid dark:text-[#dfdfdf] dark:bg-transparent border-gray dark:border-t-[#dfdfdf] dark:border-r-[#dfdfdf] dark:border-l-[#767676] dark:border-b-[#767676] text-sm pl-7 py-1 rounded-full outline-none focus:shadow-sm"
            placeholder="Search notes..."
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value.toLowerCase());
            }}
          />
          {!mobileSearchInput && (
            <div
              className="flex justify-center items-center dark:text-[#cfcfcf] text-gray text-2xl sm:text-[20px] sm:absolute pl-1 sm:top-1/2 sm:-translate-y-1/2"
              onClick={() => {
                mobileInput();
              }}
            >
              <ion-icon class="search" name="search-outline"></ion-icon>
            </div>
          )}
        </div>
        {/* The profile picture that has a drop down modal */}
        <div
          className="hamburgerContainer flex flex-col"
          ref={hamburgerContainer}
        >
          <div>
            <img
              src={userData?.profilePic || profilePic}
              alt=""
              className="hamburger block src w-8 h-8 object-top object-cover rounded-full"
              ref={hamburger}
              onClick={(e) => {
                e.stopPropagation();
                // presently now clicking the profile picture will cause the drop down to show,
                // then the event listener set on the root element will cause the dropdown to close again
                if (hamburgerState) {
                  setHamburgerState((prevState) => !prevState);
                  console.log("Closed the ham");
                } else if (hamburgerState === false) {
                  setHamburgerState((prevState) => !prevState);
                }
              }}
            />
          </div>

          {/* The dropdown */}
          {hamburgerState && (
            <div
              ref={dropDown}
              className={[
                "dropDown",
                "w-fit",
                "absolute",
                "right-5",
                "bg-white",
                "top-16",
                "rounded-md",
                "dark:bg-fullBlack",
                "z-10",
                "dark:text-white",
              ].join(" ")}
            >
              <ul className="flex flex-col flex-nowrap poppins-regular divide-y divide-gray3 text-sm">
                {/* The li tag that contains the profile picture and the account holder details */}
                <li className="flex flex-col items-center justify-center pt-5 pb-2">
                  {/* Div for the profile picture */}
                  <div className="mb-1">
                    <img
                      src={userData?.profilePic || profilePic}
                      className="block w-10 h-10 object-top object-cover rounded-full"
                      alt=""
                    />
                  </div>

                  {/* div for the account holder's username */}
                  <div className="text-center text-sm">
                    <span className="username">{userData?.username}</span>
                  </div>
                </li>

                <li>


                  {/* Section to change profile picture */}
                  <form className="px-4 py-2" method="post" encType="multipart/form-data">
                    <input 
                    type="file" 
                    className="hidden" 
                    ref={profileRef} 
                    name="files[]"
                    onChange={(e) => {
                      //Set the selected images to the file that was selected
                      setSelectedImg(prevState => prevState + 1);
                    }}
                    />
                    <span className="text-lg mr-2">
                      <i className="fa-light fa-user"></i>
                    </span>
                    <input onClick={(e) => {
                      e.preventDefault();
                      profileRef.current.click();
                      
                    }} type="submit" value="Change profile picture" name="submit" />
                  </form>

                  {/* Creating toggle for DarkMode */}
                  <div className="flex flex-row items-center justify-center gap-2 py-1">
                    {/*  */}
                    <span className="text-lg">
                      <i className="fa-light fa-sun-bright"></i>
                    </span>
                    {/* The toggle switch */}
                    <div
                      className={[
                        
                        "flex",
                        "items-center",
                        "transition-all",
                        "duration-100",
                        "ease-linear",
                        "w-14",
                        "h-fit",
                        "border-2",
                        "border-solid",
                        "border-fullBlack",
                        "dark:border-white",
                        "rounded-[20px]",
                        "p-0.5",
                        darkTheme ? "justify-end" : "justify-start",
                      ].join(" ")}
                      onClick={() => {
                        console.log(darkTheme);
                        if(darkTheme) {
                          localStorage.setItem('darkTheme', false);
                        }
                        else {
                          localStorage.setItem('darkTheme', true);
                        }
                        setDarkTheme((prevState) => !prevState);


                        // Add a functionality to save the present state to fire store and then if it succeeds add the functionality to local storage
                      }}
                    >
                      <span
                        className={[
                          "inline-block",
                          "w-3",
                          "h-3",
                          "bg-fullBlack",
                          "dark:bg-white",
                          "rounded-full",
                          "transition",
                          "transition-toggle",
                        ].join(" ")}
                      ></span>
                    </div>
                    {/* The darkMode */}
                    <span>
                      <i className="fa-sharp fa-regular fa-moon-stars"></i>
                    </span>
                  </div>
                </li>

                {/* The Signout button */}
                <li
                  className="flex flex-nowrap items-center px-4 py-2"
                  onClick={() => {
                    handleSignOut();
                  }}
                >
                  <span className="mr-2 text-lg">
                    <i className="fa-light fa-arrow-right-from-bracket" />
                  </span>
                  <span>SignOut</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
