import React,{useState,useRef, useContext} from "react";
import ReactDOM from "react-dom/client"
import {doc,addDoc,setDoc, collection} from 'firebase/firestore'
import {auth,db} from '../auth/firebase'
import { userContext } from "../contexts/userContext";
import { updatePassword } from "firebase/auth";
//Import nanoid for creating unique ids
import { nanoid } from 'nanoid'

export default function createNote({addNote, setAddNote}) {
    

    //The context to get the details of the user
    const {userData,setUserData} = useContext(userContext);
    

    // The state for controlling the addNote input
    const [noteTitle, setNoteTitle] = useState('');
    const [noteTags, setNoteTags] = useState([]);

    const inputRef = useRef(null)


    // Function to create notes
    async function storeNote() {
        if(userData?.uid) {
            // Getting the pparentDocRef
            const parentDocRef = doc(db, 'users', userData.uid);
            // Creating the sub-doc reference
            const generatedId = nanoid();
            const noteRef = doc(parentDocRef, 'notes', generatedId);
            
            //Storing the note
            try{
            const newNotesRef = await setDoc(noteRef, {
                title: noteTitle,
                tags: noteTags,
                content: 'Add your new note..',
                dateCreated: Date.now(),
                dateUpdated: Date.now(),
                id: generatedId,
            })
             
            console.log('Notes stored successfully.')
            } catch(error){
                console.error('Error storing note.')
            }
        } else{
            console.log('userData not available')
        }
    }

    //Creating the tag labels
    const tagLabels = noteTags.map((tag, index) => {
        return (
            <span key={index} className="inline-block p-1 mx-1 mb-1 rounded-lg border border-solid border-fullBlack dark:border-white text-sm">
                <span className="mr-0.5">{tag}</span>
                <span 
                className="closeBtn"
                onClick={() => {
                    setNoteTags(noteTags.filter((tag,i) => i !== index))
                }}
                >
                    <i className="fa-sharp fa-light fa-xmark"></i>
                </span>
            </span>
        )
    })


    return (
        <>
        {/* The Modal to add new notes. */}
        {addNote && <div className="modal bg-opaqueBlack/[0.6]  dark:bg-lightGray/[0.4] dark:text-white absolute w-full h-full flex justify-center items-center z-[200] inset-0">

            <div className="modal-dialogue relative w-4/5 sm:w-3/5 bg-white dark:bg-black p-5 z-20 text-fullBlack dark:text-white">
                {/* The close Button for the modal-dialogue*/}
                <button 
                type="button"  
                className="absolute top-3 right-5 text-2xl "
                onClick={() => {
                    // Setting state to close the modal
                    setAddNote(false);
                    // Add functionality to clear the inputs in the form on clicking the close button and also clear the form
                    setNoteTitle('');
                    setNoteTags([]);
                }}
                >
                    <i className="fa-sharp fa-regular fa-xmark"></i>
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
                            <div className="max-w-[80%] sm:max-w-[60%] relative">
                                    <input 
                                    type="text"
                                    placeholder="Enter tags here"
                                    ref={inputRef}
                                    
                                    className="grow inline-flex border border-solid border-fullBlack bg-white/[0.05] dark:border-white rounded px-2 py-1 focus:border-2 text-fullBlack dark:text-white placeholder:text-fullBlack dark:placeholder:text-white outline-none"
                                    onKeyDown={(e) => {
                                        
                                        if(e.key === 'Enter') {
                                            // // We will add the tags to the list of tags but prevent duplicates
                                            setNoteTags([...new Set([...noteTags, e.target.value.trim()])]);
                                            e.target.value = '';
                                        }
                                    }}
                                    />

                                    {/* The pencil to click when you want to add the tag without clicking the enter button */}
                                    <span className='absolute right-3 top-1/2 -translate-y-1/2 bg-black rounded-full text-white text-base w-6 h-6 hover:bg-white hover:text-black dark:bg-white dark:text-black shadow-sm shadow-black dark:shadow-white text-center align-middle'
                                    onClick={
                                        () => {
                                            //I will add the tag to the list of tags but prevent empty strings
                                            if(inputRef.current.value.trim() !== '') {
                                                setNoteTags([...new Set([...noteTags, inputRef.current.value.trim()])]);
                                                inputRef.current.value = '';
                                        
                                            }
                                        }
                                    }>
                                        <i class="fa-sharp fa-regular fa-plus"></i>
                                    </span>
                                </div>

                        </div>

                        <button 
                        type="button"
                        className="flex justify-center items-center mt-4 py-3 px-4 ml-auto bg-fullBlack text-white dark:bg-white dark:text-fullBlack inter-regular text-base rounded-md"
                        onClick={
                            () => {
                                //Once the note title and the tags has been filled and this button is clicked, we will store the note in the database.
                                if(noteTitle !== '' && noteTags.length > 0) {
                                    storeNote();
                                    // Setting state to close the modal
                                    setAddNote(false);
                                    // Add functionality to clear the inputs in the form on clicking the close button and also clear the form
                                    setNoteTitle('');
                                    setNoteTags([]);
                                }
                            }
                        }
                        >
                            Create new note
                        </button>
                    </div>

                </form>
            </div>

        </div>}
        </>
    )
}