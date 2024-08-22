import React, {createContext} from 'react'

export const selectedNoteContext = createContext({
    selectedNote: {},
    setSelectedNote: () => {},
})