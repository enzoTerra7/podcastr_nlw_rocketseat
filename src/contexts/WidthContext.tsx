import {  createContext, ReactNode, useRef, useState } from "react";

type WidthContextData ={
    isMobile: boolean;
}
 
export const WidthContext = createContext( {} as WidthContextData )

type WidthContextFunctionsProps = {
    children: ReactNode;
}

export const WidthContextFunctions = ({children}: WidthContextFunctionsProps) => {

    const [ isMobile ] = useState(false)

    return (
        <WidthContext.Provider value={{isMobile}}>
            {children}
        </WidthContext.Provider>
    )
}