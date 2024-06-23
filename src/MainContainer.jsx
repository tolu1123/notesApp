import React, {createContext, useContext, useState} from "react";

import NoteList from "./NoteList";


export default function MainContainer({mobileSearchInput, setMobileSearchInput, searchInputRef, hamSearchInput}) {

    // The state to monitor the addNote modal
    const [addNote, setAddNote] = useState(false);
    // The state for controlling the addNote input
    const [noteTitle, setNoteTitle] = useState('');
    const [noteTags, setNoteTags] = useState([]);

    console.log(noteTitle, noteTags)

    //Creating the tag labels
    const tagLabels = noteTags.map((tag, index) => {
        return (
            <span className="inline-block p-1 mx-1 mb-1 rounded-lg border border-solid border-fullBlack dark:border-white text-sm">
                <span className="mr-0.5">{tag}</span>
                <span 
                className="closeBtn"
                onClick={() => {
                    setNoteTags(noteTags.filter((tag,i) => i !== index))
                }}
                >
                    <i class="fa-sharp fa-light fa-xmark"></i>
                </span>
            </span>
        )
    })

    return (
        <main className='flex flex-row dark:bg-fullBlack flex-auto h-full relative'>
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
            />

            <div className="secondary absolute w-full translate-x-full sm:w-3/5 lg:w-2/3 sm:static bg-green sm:translate-x-0 sm:h-full">
                SECONDARY
            </div>

            {/* The Modal to add new notes. */}
            {addNote && <div className="modal bg-opaqueBlack/[0.6]  dark:bg-lightGray/[0.4] dark:text-white absolute w-full h-full flex justify-center items-center z-10">

                <div className="modal-dialogue relative w-4/5 sm:w-3/5 bg-white dark:bg-black p-5 z-20 text-fullBlack dark:text-white">
                    {/* The close Button for the modal-dialogue*/}
                    <button 
                    type="button"  
                    className="absolute top-3 right-5 text-2xl "
                    onClick={() => {
                        // Setting state to close the modal
                        setAddNote(false);
                        // Add functionality to clear the inputs in the form on clicking the close button and also clear the tags.
                    }}
                    >
                        <i class="fa-sharp fa-regular fa-xmark"></i>
                    </button>

                    <form action="post">
                        {/* The name for the form */}
                        <h3 className="inter-regular font-medium text-xl mb-1.5">Add new note</h3>

                        {/* The Div for the Note title */}
                        <div className="note-title mb-2">
                            <label 
                            htmlFor="title"
                            className="inter-regular"
                            >Note title</label>

                            <input 
                            type="text" 
                            placeholder="Note title..." 
                            value={noteTitle}
                            onChange={(e) => {
                                setNoteTitle(e.target.value);
                            
                            }}
                            className="w-full mt-1 inter-regular py-1 px-2 block rounded border dark:border-[1.5px] backdrop-blur-lg border-solid bg-white/[0.05] text-fullBlack dark:text-white border-fullBlack dark:border-white outline-none focus:border-2 placeholder:text-fullBlack dark:placeholder:text-white"
                            />
                        </div>

                        {/* The div for adding tags */}
                        <div className="note-tags">
                            <label 
                            htmlFor="tags "
                            className="inter-regular"
                            >
                                Note tag
                            </label>

                            {/* The major div that encapsulates the already created tags and the text input*/}
                            <div className="flex flex-wrap items-center tag-input mt-1 w-full p-1 rounded backdrop-blur-lg bg-white/[0.05] border border-solid border-fullBlack dark:border-white">
                                {/* The span that will contain the tags */}
                                <span className="tag-container">
                                    {tagLabels}
                                </span>
                                {/*The inputbox for entering data into the tags. */}
                                <input 
                                type="text"
                                placeholder="Enter tags here"
                                
                                className="max-w-[80%] sm:max-w-[50%] grow inline-flex border border-solid border-fullBlack bg-white/[0.05] dark:border-white rounded px-2 py-1 focus:border-2 text-fullBlack dark:text-white placeholder:text-fullBlack dark:placeholder:text-white outline-none"
                                onKeyDown={(e) => {
                                    
                                    if(e.key === 'Enter') {
                                        // We will add the tags to the list of tags but prevent duplicates
                                        setNoteTags([...new Set([...noteTags, e.target.value.trim()])]);
                                        e.target.value = '';
                                    }
                                }}
                                />

                            </div>

                            <button 
                            type="button"
                            className="flex justify-center items-center mt-4 py-3 px-4 ml-auto bg-fullBlack text-white dark:bg-white dark:text-fullBlack inter-regular text-base rounded-md"
                            onClick={
                                () => {
                                    // Add the functionality to create a new note and clear the form and the tags.
                                }
                            }
                            >
                                Create new note
                            </button>
                        </div>

                    </form>
                </div>

            </div>}
        </main>
    )
}