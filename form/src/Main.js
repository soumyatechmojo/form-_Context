import { useContext } from "react"
import { userContext } from "./Action4"
import Page from "./Page";
import TopNav from "./TopNav";

export default function Main () {
    var [title, username] = useContext(userContext);
    return (
        <>
            <h2>Main</h2>
            <p>Title: {title}</p>
            <p>Username: {username}</p>
            <TopNav />
            <Page />
        </>
    )
}