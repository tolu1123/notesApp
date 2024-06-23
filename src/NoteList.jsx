import React from "react";

export default function NoteList({mobileSearchInput, setMobileSearchInput, searchInputRef, hamSearchInput, setAddNote}) {
    return (
        <div className="primary w-full sm:w-2/5 lg:w-1/3 h-full relative p-5">
                {/* Creating the mobile search input */}
                <div style={{}} className={['mobileSearch', 'w-full', 'flex', 'flex-row','relative', 'overflow-visible', mobileSearchInput? 'h-fit translate-y-0 opacity-100 p-0.5': 'h-0 opacity-0 -translate-y-10', ].join(' ')}>

                    {/* the search functionality */}
                    <input 
                    className={['w-full','bg-white/[0.2]', 'backdrop-blur-sm', '', 'border', 'dark:border-[1.5px]', 'border-solid', 'dark:text-white', 'transition-opacity', 'duration-0', 'border-gray', 'dark:border-t-[#dfdfdf]', 'dark:border-r-[#dfdfdf]', 'dark:border-l-[#767676]', 'dark:border-b-[#767676]', 'text-lg', 'pl-9', 'py-1', 'rounded-full', 'outline-none', 'focus:shadow-sm', mobileSearchInput? null: 'opacity-0'].join(' ')}
                    type="text"
                    ref={searchInputRef}
                    placeholder='Search notes...'  />

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
                    }}
                    >
                        <i className="fa-solid fa-circle-xmark closeSearchBtn fa-lg"></i>
                    </div>
                </div>

                {/* The add new note Button */}
                <button
                className='absolute bottom-7 right-3 sm:static sm:w-full flex items-center justify-center sm:justify-start w-12 h-12 sm:p-4 text-base bg-lightGray rounded-full sm:rounded-lg inter-regular mb-2'
                onClick={
                    () => {
                        setAddNote(true)
                    }
                }
                > 
                    <i className="fa-sharp fa-regular fa-plus text-2xl sm:text-xl"></i>
                    <span className='ml-1 hidden sm:flex'>Add new note</span>
                </button>

                {/* Add a smoke screen that informs us we do not have any note if we do not have any saved note. */}

                {/* The Dialogue to help add new notes */}
                

            </div>
    )
}