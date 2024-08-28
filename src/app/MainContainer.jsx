import React, { createContext, useContext, useEffect, useState } from "react";

import NoteList from "./NoteList";
import CreateNotes from "./CreateNotes";

import Editor from "./Editor";
import EmptyNote from "./EmptyNote";
import SelectNote from "./SelectNote";

import { userNotes } from "../contexts/notesContext";
import { selectedNoteContext } from "../contexts/selectedNoteContext";


export default function MainContainer({
  mobileSearchInput,
  setMobileSearchInput,
  searchInputRef,
  hamSearchInput,
  searchValue,
  setSearchValue,
  forceChange,
  setForceChange,
}) {
  // The state to monitor the addNote modal
  const [addNote, setAddNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const {notes, setNotes} = useContext(userNotes)
  //The state that holds the boolean whether to display the note or not
  const [displayNote, setDisplayNote] = useState(false);

  //use effect to monitor size of the screen to handle display Note
  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 640){
        setDisplayNote(true)
      }else {
        setDisplayNote(false)
      }
    })

    return () => {
      window.removeEventListener('resize', () => {
        if(window.innerWidth > 640){
          setDisplayNote(true)
        }else {
          setDisplayNote(false)
        }
      })
    }
  }
  , [displayNote])
  useEffect(() => {
    if(window.innerWidth > 640){
      setDisplayNote(true)
    }
  }, [displayNote])

  function outlet() {
    if(notes.length > 0){
      if(selectedNote.title !== undefined){
        return <Editor displayNote={displayNote} setDisplayNote={(state)=>setDisplayNote(state)} forceChange={forceChange} setForceChange={setForceChange}/>
      }else{
        return <SelectNote/>
      }
    }else if (notes.length === 0){
      return <EmptyNote/>
    }
  }

  return (
    <selectedNoteContext.Provider value={{selectedNote, setSelectedNote}}>
      <main className="main-container flex flex-col relative sm:flex-row dark:bg-fullBlack flex-auto h-full flex-grow">
        {/* The main content will contain two main elements such that it gets displayed side by side on anything greater or equals to sm  */}

        {/* On smaller screens */}
        {/* On smaller devices, i have only the primary main content that will show the list of notes with a search input that will show up if you click the search input */}
        {/* and then it will be followed by a list of the created notes so far. */}
        {/* and then a add new note button will be floated to the bottom right corner that will allow for adding new note  */}
        {/* and probably an ediiting screen */}

        {/* on larger screens */}
        {/* i have the lists of new notes to be created on the primary side of the main element */}
        {/* i have the notes outlet on the right side. */}

        <NoteList
          mobileSearchInput={mobileSearchInput}
          setMobileSearchInput={setMobileSearchInput}
          searchInputRef={searchInputRef}
          hamSearchInput={hamSearchInput}
          setAddNote={setAddNote}
          displayNote={displayNote} 
          setDisplayNote={(state)=>setDisplayNote(state)}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {/* translate-x-[2000px] hidden */}

        <div className={`secondary bg-white dark:bg-black absolute top-0 transition-all duration-200 ease-linear w-full h-full ${displayNote ? 'translate-x-0':'!sm:translate-x-0  sm:!block'} z-10 sm:z-[1] !sm:block sm:static  sm:w-3/5 lg:w-2/3 !sm:translate-x-0 sm:h-full`}>
          {
           outlet()
          }
        </div>

        <CreateNotes
          addNote={addNote}
          setAddNote={(state) => setAddNote(state)}
        />
      </main>
    </selectedNoteContext.Provider>
  );
}
