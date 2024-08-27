import React, {useEffect, useState, useContext} from "react";

import { userContext } from "../contexts/userContext";
import {userNotes} from '../contexts/notesContext';
import { selectedNoteContext } from "../contexts/selectedNoteContext";


export default function NoteList({mobileSearchInput, setMobileSearchInput, searchInputRef, hamSearchInput, setAddNote, displayNote, setDisplayNote, searchValue, setSearchValue}) {

    const {userData, setUserData} = useContext(userContext)
    const {notes, setNotes} = useContext(userNotes)
    const {selectedNote, setSelectedNote} = useContext(selectedNoteContext);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

 
    const filteredNotes = notes.filter(data => {
        if (searchValue) {
            const tag = data.tags.some(tag => tag.toLowerCase().includes(searchValue));
            const titleMatches = data.title.toLowerCase().includes(searchValue);
            const contentMatches = data.content.toLowerCase().includes(searchValue);
    
            if ((titleMatches || contentMatches || tag) && searchValue !== '') {
                return true;
            } else {
                // No search matched
                return false;
            }
        }
        return true;
    });

    let notePanel;

    //The conditional here determines what gets displayed in the outlet
    if(notes.length === 0) {
        //No note created
        notePanel = <div className="w-full h-full flex flex-col items-center justify-center dark:text-white">You have no created note yet</div>
    } else if (filteredNotes.length > 0) {
        notePanel = filteredNotes.map((data, index) => {
            return (
                <div key={data.dateCreated} className={`note ${data.id === selectedNote.id ? 'selected': 'notSelected'} rounded-md px-5 my-3 py-4 overflow-hidden`}
                    onClick={() => {
                        if(window.innerWidth < 640) {
                            setDisplayNote(true)
                        }
                        setSelectedNote(data)
                    }}
                >
    
                    {/* The date the note was last updated or last created */}
                    <span className="date inline-block">
                        {`${new Date(data.dateUpdated).getDate()} ${months[new Date(data.dateUpdated).getMonth()]}` }
                    </span>
                    {/* The title of the note created */}
                    <div className="title inter-regular text-md my-1 line-clamp-1">
                        {data.title}
                    </div>
                    {/* The content of the created notes */}
                    <div className="content inter-regular text-sm line-clamp-2 my-2">
                        {data.content == ''? 'Add your new note..': data.content}
                    </div>
                    {/* The tags */}
                    <div className="tags line-clamp-1">
                        {
                            data.tags.map((tag, index, array) => {
                                return (<span key={index} className={`tagContainer inline-block px-2 py-2 ${index == 0 ? 'mr-2': 'mx-2'} rounded-lg  text-xs`}>
                                    <span className="tag">{tag}</span>
                                </span>)
                            })
                        }
                    </div>
                    
                </div>
            )
        })
    } else if (filteredNotes.length === 0) {
        //No search matched
        notePanel = <div className="w-full h-full flex flex-col items-center justify-center dark:text-white">There was no result for your match</div>
        
    }

    return (
        <div className="primary w-full sm:w-2/5 lg:w-1/3 h-full relative overflow-y-auto flex flex-col">
            
            {/* The created notelist to display the already created notes */}
            <div className="noteList flex-grow h-full overflow-y-auto p-5">
                {/* Creating the mobile search input */}
                <div className={['mobileSearch', 'w-full', 'flex', 'flex-row','relative', 'overflow-visible', mobileSearchInput? 'h-fit translate-y-0 opacity-100 p-0.5': 'h-0 opacity-0 -translate-y-10'].join(' ')}>

                    {/* the search functionality */}
                    <input 
                    className={['w-full','bg-white/[0.2]', 'backdrop-blur-sm', 'border', 'dark:border-[1.5px]', 'border-solid', 'dark:text-white', 'transition-opacity', 'duration-0', 'border-gray', 'dark:border-t-[#dfdfdf]', 'dark:border-r-[#dfdfdf]', 'dark:border-l-[#767676]', 'dark:border-b-[#767676]', 'text-lg', 'pl-9', 'py-1', 'rounded-full', 'outline-none', 'focus:shadow-sm', mobileSearchInput? null: 'opacity-0'].join(' ')}
                    type="text"
                    ref={searchInputRef}
                    placeholder='Search notes...'
                    onChange={(e) => {
                        //We set the search value
                        setSearchValue(e.currentTarget.value.toLowerCase())
                    }}
                    />

                    <div className="flex justify-center items-center dark:text-[#cfcfcf] text-gray text-2xl absolute pl-1.5 top-1/2 -translate-y-1/2">
                        <ion-icon 
                        class="search hamSearchIcon" 
                        name="search-outline"
                        ref={hamSearchInput}
                        ></ion-icon>
                    </div>

                    {/* the close icon */}
                    <div 
                    className="closeSearch absolute top-1/2 -translate-y-1/2 right-7 dark:text-white"
                    onClick={() => {
                        // close the mobile search input
                        setMobileSearchInput(false);
                        searchInputRef.current.value = ''
                        setSearchValue('')
                    }}
                    >
                        <i className="fa-solid fa-circle-xmark closeSearchBtn fa-lg"></i>
                    </div>
                </div>

                {/* The add new note Button */}
                <button
                className='absolute bottom-7 right-5 sm:static sm:w-full flex items-center justify-center sm:justify-start w-12 h-12 sm:p-4 text-base bg-lightGray rounded-full sm:rounded-lg inter-regular mb-2'
                onClick={
                    () => {
                        setAddNote(true)
                    }
                }
                > 
                    <i className="fa-sharp fa-regular fa-plus text-2xl sm:text-xl"></i>
                    <span className='ml-1 hidden sm:flex'>Add new note</span>
                </button>
                {/*The note list */}

                {notePanel}

            </div>

        </div>
    )
}