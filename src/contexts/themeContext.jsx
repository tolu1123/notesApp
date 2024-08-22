import React,{createContext} from 'react'

export const themeContext = createContext({
    darkTheme: false,
    setDarkTheme: () => {}
})