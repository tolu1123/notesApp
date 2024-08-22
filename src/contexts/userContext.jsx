import React,{createContext} from 'react'


export const userContext = createContext({
    userData: JSON.parse(localStorage.getItem('user'))||{},
    setuserData: () => {}
})