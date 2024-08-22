import React, {createContext} from "react";

export const userNotes = createContext({
    notes: [],
    setNotes: () => {}
})