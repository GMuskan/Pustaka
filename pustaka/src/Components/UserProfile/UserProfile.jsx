import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import "./UserProfile.css";
export const UserProfile = ({ user }) => {
    const { logoutClickHandler } = useContext(AuthContext);
    return (
        <div className="user-profile-container">
            <div className="user-profile-body">
                <p>
                    <span>Name: </span> {user?.firstName + " " + user?.lastName}
                </p>
                <p>
                    <span>Email: </span>
                    {user?.email}
                </p>
                <button onClick={logoutClickHandler}>LogOut</button>
            </div>
        </div>
    )
}