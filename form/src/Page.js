import { useContext } from "react"
import { userContext } from "./Action4"
import Profile from "./Profile";

export default function Page () {
    var [username] = useContext(userContext);
    return (
        <>
            <h2>Page</h2>
            <p>Username: {username}</p>
            <Profile />
        </>
    )
}