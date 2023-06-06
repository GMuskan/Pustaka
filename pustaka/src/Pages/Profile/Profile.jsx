import { useContext, useEffect } from "react"
import { DataContext } from "../../Contexts/DataContext"
import "./Profile.css";
import { AuthContext } from "../../Contexts/AuthContext";
export const Profile = () => {
    const { changeTitle } = useContext(DataContext);
    const { authState } = useContext(AuthContext);
    useEffect(() => {
        changeTitle("My Profile")
    }, [changeTitle])

    return (
        <>
            <h1>My Profile</h1>
            <div className="user-profile-details">
                <div className="profile-heading">
                    <header><h3>Profile Details</h3></header>
                    <hr />
                </div>
                <div className="profile-details">
                    <div>
                        <h4>Name</h4>
                        <h4>Email</h4>
                    </div>
                    <div>
                        <p>{authState?.user?.firstName}{" "}{authState?.user?.lastName}</p>
                        <p>{authState?.user?.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}