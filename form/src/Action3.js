import { createContext, useState } from "react";
import Parent from "./Parent";

var counterContext = createContext();

export default function App () {
    var [counter, setCounter] = useState(0);

    return (
        <>
            <h2>Child component: Parent</h2>
            <counterContext.Provider value={[counter, setCounter]}>
                <Parent/>
            </counterContext.Provider>
        </>
    )
}

export {counterContext};