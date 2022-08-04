import { createContext, useState } from "react"
import Dashboard from "./Dashboard";

var userContext = createContext();

export default function App () {
    var [title] = useState("Member of technical staff at Techmojo");
    var [username] = useState("SOUMYADEEP DAS");
    var [activeProfileId] = useState("1");

    return (
    <>
        <userContext.Provider value={[title, username, activeProfileId]}>
            <Dashboard />
        </userContext.Provider>
    </>
    )
}

export { userContext };