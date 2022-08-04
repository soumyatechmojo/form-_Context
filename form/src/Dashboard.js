import { useContext } from "react";
import { userContext } from "./Action4";
import Main from "./Main";
import SideNav from "./SideNav";

export default function Dashboard () {
    var [title, username, activeProfileId] = useContext(userContext);

    return (
        <>
        <h2>Dashboard</h2>
        <p>Title: {title}</p>
        <p>Username: {username}</p>
        <p>Active profile ID: {activeProfileId}</p>
        <SideNav />
        <Main />
        </>
    )
}