import React, {useContext} from "react";
import { themeContext } from "../contexts/themeContext";

export default function EmptyNote() {
    const {darkTheme, setDarkTheme} = useContext(themeContext);

    return(
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/* The image to display */}
            <div className="h-[70%]">
                <img src='/images/library.jpg' className={`w-full h-full object-cover object-center ${darkTheme? 'hidden':'' }`} alt="Select notes images" />
                
                {/* This image will be displayed in dark mode */}
                <img src='/images/libraryDark.png' className={`w-full h-full object-cover object-center ${darkTheme=== false? 'hidden': '' }`} alt="Select notes images" />
            </div>
            <p className="text-center pt-5 inter-regular dark:text-white">Pick a note to continue from where you stopped</p>
        </div>
    )
}