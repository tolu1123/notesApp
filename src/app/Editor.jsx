import React, { useState, useRef, useEffect, useContext } from 'react';

import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import debounce from 'lodash.debounce';

import { doc, updateDoc, deleteDoc, collection, onSnapshot } from "firebase/firestore";

import { userNotes } from '../contexts/notesContext';
import { selectedNoteContext } from '../contexts/selectedNoteContext';
import { userContext } from '../contexts/userContext';

import { onAuthStateChanged } from "firebase/auth";

import {db, auth} from '../auth/firebase'
 

export default function Editor({displayNote, setDisplayNote,forceChange, setForceChange}) {

    const {notes, setNotes} = useContext(userNotes)
    const {userData, setUserData} = useContext(userContext);
    const {selectedNote, setSelectedNote} = useContext(selectedNoteContext);
    const [editFlag, setEditFlag] = useState(false);
    const [titleFlag, setTitleFlag] = useState(false);
    const [tagFlag, setTagFlag] = useState(false);

    //The array to store the tags
    const [noteTitle, setNoteTitle] = useState(null);
    const [noteTags, setNoteTags] = useState(selectedNote.tags);

    const titleRef = useRef(null); 
    const inputRef = useRef(null);

    const [userId, setUserId] = useState('');

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
        //We sync offline data with online data
        let unsub = () => {};
        const offlineData = JSON.parse(localStorage.getItem('offlineData'));
      
      
        if (offlineData && offlineData.uid === userData.uid) {
      
          unsub = onSnapshot(
            collection(db, `users/${userData.uid}/notes`),
            { includeMetadataChanges: true },
            (snapshot) => {
      
              snapshot.forEach(async (doc) => {
                if (!snapshot.metadata.fromCache) {
                //We will query the cloud data using the notes if there is a document that matches the unsynchronized data
                // and that the unsynchronized note was dateUpdated is greater than the cloud data dateUpdated
                //If there is a match, we will update the cloud data with the unsynchronized data
                  if (offlineData.notes.some(note => note.id === doc.data().id && note.dateUpdated > doc.data().dateUpdated)) {
                //We are checking if there is a note that matches the unsynchronized data and the unsynchronized note was  updated last

                    const unsynchronizedNote = offlineData.notes.find(note => note.id === doc.data().id && note.dateUpdated > doc.data().dateUpdated);
                    //Upload the data
                    await updateDocument(unsynchronizedNote)
                  }
                }
              });
            }
          );
        }
        return () => unsub();
      }, [userData]);
      
    // Update the noteTitle used for editing the note on RENDER
    useEffect(() => {
        setNoteTitle(selectedNote.title)
    }, [selectedNote.title])

     

    useEffect(() => {
        //If the note data we will update the localStorage

        //We will write data to localStorage and then check it even later when we are synchronizing data  
        //as we can not depend on the use window.navigator.onLine because in a special use case on some browsers 
        // if the user agent device is connected to a wifi which has an internet connectivity but its data subscription 
        // is diminished, it will return true(while it is not connected to the internet.)
        
        if(localStorage.getItem('offlineData')) {
            const offlineData = JSON.parse(localStorage.getItem('offlineData'));
            //Explicit usage of the note we already set
            offlineData.notes = notes;
            localStorage.setItem('offlineData', JSON.stringify(offlineData));
            console.log('Is this not working.')
        }else {
            //We could not find the offlineData, so we will set it explicitly
            localStorage.setItem('offlineData', JSON.stringify({
                name: userData.username,
                email: userData.email,
                uid: userData.uid,
                notes: notes,
            }))
        }
    }, [notes])
    

    // Function to update the document
    async function updateDocument(updatedObj) {

        //Update the notes context
        let element = notes.filter(ele => ele.dateCreated === selectedNote.dateCreated)
        let updatedNotes = notes.map(ele => {
            if(ele.dateCreated === selectedNote.dateCreated) {
                return updatedObj;
            } else {
                return ele
            }
        })
        console.log('Jehovah, this is where i call your name...')
        //Sort the note
        updatedNotes.sort((a, b) => b.dateUpdated - a.dateUpdated);
        // We will update the note context now
        setNotes(updatedNotes);


        if(userData.uid && selectedNote.id) {
            try {
                const docRef = doc(db, `users/${userData.uid}/notes/${selectedNote.id}`);
                await updateDoc(docRef, updatedObj);  
            } catch (error) {
                console.log('Error deleting the note')
                throw new Error(error)
            }
            
        }
    }

    async function deleteDocument(userId, noteId) {  
        try {
            //Delete the note from the database
            await deleteDoc(doc(db, `users/${userId}/notes/${noteId}`));
            console.log('Document successfully deleted!', forceChange);
            setForceChange(status => (status + 1));
        } catch(error) {
            console.log('Error deleting the note')
            throw new Error(error)
        }
    }

    const handleDelete = async () => {
        const userId = userData.uid;
        const noteId = selectedNote.id;
        const dateCreated = selectedNote.dateCreated;   
        
        try {
            // Delete from Firestore
            await deleteDocument(userId, noteId);
    
            // Remove from local state after Firestore deletion
            setNotes(notes => notes.filter(note => note.dateCreated !== dateCreated));
    
            // Reset selected note
            setSelectedNote({});
    
            // Close the note display
            setDisplayNote(false);

    
            console.log('Note deleted successfully');
        } catch (error) {
            console.error('Error deleting note:', error);
            // Optionally, show an error message to the user here
            throw new Error('Error deleting note:', error);
        }
    };

    useEffect(() => {
        console.log('Note state changed', notes)
    }, [notes]);

    const [content, setContent] = useState(selectedNote.content);

    useEffect(() => {
        
        setContent(selectedNote.content);

    }, [selectedNote.content])

    // const currentNote = notes.find(note => note.id === selectedNote.id)
    console.log(selectedNote, 'This is notes')

    const [flag, setFlag] = useState(0);
    useEffect(() => {
        //Update the selected note content if the value changes
        setSelectedNote(prevState => {
            let updatedContent = {...prevState,
                content: content,
                dateUpdated: Date.now(),
            }

            
            setTimeout(() => {
                updateDocument(updatedContent)
            }, 500)

            return updatedContent;
        })
    }, [flag])
    

    const saveContent = debounce((value) => {
        setFlag(status => status + 1)
        if(value === '' && selectedNote.dateCreated === selectedNote.dateUpdated) {
            setContent('Add your new note..')
        }else {
            setContent(value);
        }
    }, 30);

    function padString(digit) {
        return digit.toString().padStart(2, '0')
    }

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const lastModified = () => {
        let date = new Date(selectedNote.dateUpdated);
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear(), padString(date.getHours())}:${padString(date.getMinutes())} ${date.getHours() > 12? 'PM': 'AM'}`
    }
    //Creating the tag labels
    //(used a ternary as the context is not available on first paint)
    const tagLabels = selectedNote.tags.map((tag, index) => {
        return (
            <span key={index} className="inline-block p-1 mx-1 mb-1 rounded-lg border border-solid border-fullBlack dark:border-white text-sm">
                <span className="mr-0.5">{tag}</span>
                <span 
                className="closeBtn"
                onClick={() => {
                    //We are only allowed to delete a tag if there are more than or equals to 2 tags
                    if(noteTags.length >= 2) {

                        //We are deleting the tag from the selected note
                        const formerTags = selectedNote.tags;
                        const updatedTags = formerTags.filter((_,i) => i !== index);
                        setSelectedNote(prevState => {
                            let updatedContent = {
                                ...prevState,
                                dateUpdated: Date.now(),
                                tags: updatedTags,
                            }
                            //Update the noteTags
                            setNoteTags(updatedTags);
                            //Set the selected note with the return value
                            console.log('Update the noteTags');
            
                            setTimeout(() => {
                                updateDocument(updatedContent)
                            }, 500)
            
                            return  updatedContent;
                        })
                    }
                }}
                >
                    <i className="fa-sharp fa-light fa-xmark"></i>
                </span>
            </span>
        )
    })

    return (

        <div className='flex flex-col flex-grow h-full'>

        <div className="meta-pane p-5 bg-white dark:bg-black">
            <div className="">
                <div 
                onClick={() => {
                    setDisplayNote(false)
                    setSelectedNote({})
                }}
                className=' text-black text-base w-10 h-10 dark:text-white sm:hidden'
                >
                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
                </div>

                <div className="meta-contents text-black dark:text-white">
                    {/* Title of the note */}
                    <div className="mb-2 flex flex-row items-center gap-3">
                        <h3 className='text-2xl'>{selectedNote.title}</h3>
                        <span
                        className='cursor-pointer text-sm'
                        onClick={() => {
                            setEditFlag(true)
                            setTitleFlag(true)
                        }}>
                            {/* Pencil icon to edit the name of the note */}
                            <i className="fa-sharp fa-light fa-pencil"></i>
                        </span> 

                        {/* Span element to delete */}
                        <span
                            className='cursor-pointer text-sm'
                            onClick={handleDelete}
                        >
                            <i className="fa-light fa-trash-can"></i>
                        </span>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Created by: 
                                </td>
                                <td>
                                    <div>
                                        <span>{userData.username}</span>
                                          
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Last modified:
                                </td>
                                <td>
                                    {lastModified()}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tags:
                                </td>
                                <td>
                                {
                                    selectedNote?.tags?.length > 0 ? selectedNote.tags.map((tag, index, array) => {
                                        if(array.length - 1 === index) {
                                        return (<span key={index}>
                                            <span className={`tagContainer notSelected inline-block px-2 py-1 mr-1 rounded-lg  text-xs`}>
                                                <span className="title">{tag}</span>
                                            </span>
                                            <span key={index} className={`tagContainer notSelected cursor-pointer inline-block px-2 py-1 rounded-lg  text-xs`}>
                                                <span className="mr-0.5 title"><i className="fa-sharp fa-regular fa-plus"></i></span>
                                                <span 
                                                className="title"
                                                onClick={() => {
                                                    setEditFlag(true);
                                                    setTagFlag(true);
                                                }}
                                                >Add new tag</span>
                                            </span>
                                        </span>)
                                        } else {
                                           return (<span key={index} className={`tagContainer notSelected inline-block px-2 py-1 ${index == 0 ? 'mr-1': 'mx-1'} rounded-lg  text-xs`}>
                                                <span className="title">{tag}</span>
                                            </span>)
                                        }
                                    })
                                    : ''
                                }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
        <MDEditor
        value={content}
        onChange={(value) => {saveContent(value)}}
        preview='edit'
        height='100%'
        overflow={false}
        className='editor !h-full bg-white dark:bg-black wmde-markdown-var !flex-grow'
        enableScroll={true}
        />
        
        {/*The component for updating the metaData  */}
        {editFlag && <div className="bg-opaqueBlack/[0.6]  dark:bg-lightGray/[0.4] dark:text-white absolute w-full h-full flex justify-center items-center z-[200] inset-0">
            <div className="modal-dialogue relative w-4/5 sm:w-3/5 bg-white dark:bg-black p-5 z-20 text-fullBlack dark:text-white">
                    {/* The close Button for the modal-dialogue*/}
                    <button 
                    type="button"  
                    className="absolute top-3 right-5 text-2xl "
                    onClick={() => {
                        // Setting state to close the modal
                        setEditFlag(false);
                        setTitleFlag(false);
                        setTagFlag(false);
                    }}
                    >
                        <i className="fa-sharp fa-regular fa-xmark"></i>
                    </button>

                    <div>
                        {/* The name for the form */}
                        <h3 className="inter-regular font-medium text-xl mb-1.5">{titleFlag? 'Edit Note title': tagFlag ? 'Edit Note tags': ''}</h3>

                        {/* The Div for the Note title */}
                        {
                            titleFlag && <div className="note-title mb-2">
                                <label 
                                htmlFor="title"
                                className="inter-regular"
                                >Note title</label>

                                <input 
                                type="text" 
                                placeholder="Note title..." 
                                value={noteTitle}
                                ref={titleRef}
                                onChange={(e) => {
                                    setNoteTitle(e.target.value);
                                
                                }}
                                className="w-full mt-1 inter-regular py-1 px-2 block rounded border dark:border-[1.5px] backdrop-blur-lg border-solid bg-white/[0.05] text-fullBlack dark:text-white border-fullBlack dark:border-white outline-none focus:border-2 placeholder:text-fullBlack dark:placeholder:text-white"
                                />
                            </div>
                        }


                        {/* The div for adding tags */}         
                        {
                        tagFlag && <div className="note-tags">
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
                                        
                                        if(e.key === 'Enter' && e.target.value.trim() !== '') {
                                            // // We will add the tags to the list of tags but prevent duplicates
                                            
                                            const formerTags = selectedNote.tags;
                                            setSelectedNote(prevState => {
                                                let updatedContent = {
                                                    ...prevState,
                                                    dateUpdated: Date.now(),
                                                    tags: [...new Set([...formerTags,  e.target.value.trim()])]
                                                }

                                                setTimeout(() => {
                                                    updateDocument(updatedContent)
                                                }, 500)

                                                return  updatedContent;
                                            })
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

                                                const formerTags = selectedNote.tags;
                                                setSelectedNote(prevState => {
                                                    let updatedContent = {
                                                        ...prevState,
                                                        dateUpdated: Date.now(),
                                                        tags: [...new Set([...formerTags,  e.target.value.trim()])]
                                                    }

                                                    setTimeout(() => {
                                                        updateDocument(updatedContent)
                                                    }, 500)

                                                    return  updatedContent;
                                                })
                                                inputRef.current.value = '';
                                        
                                            }
                                        }
                                    }>
                                        <i className="fa-sharp fa-regular fa-plus"></i>
                                    </span>
                                </div>

                                
                            </div>
                        </div>
                        }

                            {titleFlag &&
                                <button 
                                type="button"
                                className="flex justify-center items-center mt-4 py-3 px-4 ml-auto bg-fullBlack text-white dark:bg-white dark:text-fullBlack inter-regular text-base rounded-md"
                                onClick={
                                    () => {
                                        //Once the note title has been edited, we will store the note in the database.

                                        if(titleRef.current.value !== '') {
                                            setSelectedNote(prevState => {
                                                let updatedContent = {...prevState,
                                                    title: titleRef.current.value,
                                                    dateUpdated: Date.now(),
                                                }
                                    
                                                
                                                setTimeout(() => {
                                                    updateDocument(updatedContent)
                                                }, 500)
                                    
                                                return updatedContent;
                                            })
                                        }

                                        // Setting state to close the modal
                                        setEditFlag(false);
                                        setTitleFlag(false);
                                        setTagFlag(false);

                                    }
                                }
                                >
                                    Save changes
                                </button>
                            }
                        

                    </div>
                </div>
        </div>}

        </div>

        
    )
}