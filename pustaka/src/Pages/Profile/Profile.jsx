import { useContext, useEffect } from "react"
import "./Profile.css";
import { AuthContext } from "../../Contexts/AuthContext";
import { changeTitle } from "../../utils/commonUtils";

export const Profile = () => {
    const { authState } = useContext(AuthContext);
    useEffect(() => {
        changeTitle("My Profile")
    }, [])

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