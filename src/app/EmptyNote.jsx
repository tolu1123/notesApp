import React, {useContext} from "react";
import { themeContext } from "../contexts/themeContext";

export default function EmptyNote() {
    const {darkTheme, setDarkTheme} = useContext(themeContext);

    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/* The image to display */}
            <div className="h-[70%]">
                <img src='/images/emptyNote.png' className={`w-full h-full object-cover object-center ${darkTheme? 'hidden': ''}`} alt="Empty Note application" />
                {/* This image will be displayed if we are in dark mode */}
                <img src='/images/emptyNoteDark.png' className={`w-full h-full object-cover object-center ${darkTheme === false ? 'hidden': ''}`} alt="Empty Note application" />
            </div>
            <p className="text-center pt-5 inter-regular dark:text-white">You have no created note yet</p>
        </div>
    )
}