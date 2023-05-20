import { useContext } from "react"
import { DataContext } from "../../Contexts/DataContext"

export const Profile = () => {
    const { logoutClickHandler } = useContext(DataContext);
    return(
        <>
            <h1>Profile</h1>
            <button onClick={logoutClickHandler}>Logout</button>
        </>
    )
}