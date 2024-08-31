import React,{useState, useEffect, useContext, useRef} from "react";

import '../output.css';
import { userContext } from "../contexts/userContext";
import { themeContext } from "../contexts/themeContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../auth/firebase";


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
  const [updatingPic, setUpdatingPic] = useState(false);
  
  const uploadInfoEle = useRef(null);
  const imgCont = useRef(null);

  

  // Function to update the document
  async function updateUserData(updatedObj) {
    if(userData.uid) {
        const docRef = doc(db, `users/${userData.uid}`);
        await updateDoc(docRef, updatedObj);  
    }
  }

  
  useEffect(() => {
    if (selectedImg) {
        const url = 'https://api.cloudinary.com/v1_1/drlrawk5w/image/upload';
        const file = profileRef.current.files[0];

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'notesApplication');

        // We set the updating pic to true
        setUpdatingPic(true);

        //We optimistically update the profile picture
        const formerURL = userData.profilePic;
        const newPicUrl = URL.createObjectURL(file);
        setUserData(prevState => ({...prevState, profilePic: newPicUrl}))
        
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then((response) => {
             
            return response.json()
        })
        .then((data) => {
            console.log(data, 'Returned from Cloudinary');
            setUserData(prevState => {
                let updatedContent = { ...prevState, profilePic: data.url };
                updateUserData(updatedContent);

                return updatedContent;
            });
            //We then revoke the object URL
            URL.revokeObjectURL(newPicUrl);
            //We set the updating pic to false
            setUpdatingPic(false);
        })
        .catch((error) => {
            //We revert the profile picture to the former one
            setUserData(prevState => ({...prevState, profilePic: formerURL}))
            //We then revoke the object URL
            URL.revokeObjectURL(newPicUrl);
            //We inform the user that the upload failed
            uploadInfoEle.current.textContent = 'Upload failed';
            uploadInfoEle.current.classList.add('text-red');
            //We create a timeout such that after 4seconds the upload failed message will disappear and we will return the uploadInfoEle's textContent to its former content
            setTimeout(() => {
              setUpdatingPic(false);
              uploadInfoEle.current.textContent('Uploading profile picture...');
              uploadInfoEle.current.classList.remove('text-red');
            }, 4000);
            console.error('Error uploading image:', error);
        });
    }
}, [selectedImg]);


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
              src={userData?.profilePic}
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
                  <div ref={imgCont} className="mb-1 p-0.5 rounded-full">
                    <img
                      src={userData?.profilePic}
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
                  <form className="px-4 py-2 relative" method="post" encType="multipart/form-data">
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
                    <input className="cursor-pointer" onClick={(e) => {
                      e.preventDefault();
                      profileRef.current.click();
                      
                    }} type="submit" value="Change profile picture" name="submit" />
                    {updatingPic && <div ref={uploadInfoEle} className="absolute w-full inset-0 backdrop-opacity-50 bg-black/70 text-white dark:bg-white/55 dark:text-black dark:font-bold flex items-center justify-center text-xs">
                      Uploading profile picture...
                    </div>}
                  </form>

                  {/* Creating toggle for DarkMode */}
                  <div className="flex flex-row items-center justify-center gap-2 py-1 cursor-pointer">
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
                  className="flex flex-nowrap items-center px-4 py-2 cursor-pointer"
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
