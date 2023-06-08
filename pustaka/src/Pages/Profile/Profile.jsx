import { useContext, useEffect } from "react"
import "./Profile.css";
import { AuthContext } from "../../Contexts/AuthContext";
import { changeTitle } from "../../utils/commonUtils";
import { DataContext } from "../../Contexts/DataContext";
import { UserProfile } from "../../Components/UserProfile/UserProfile";
import { UserAddress } from "../../Components/UserAddress/UserAddress";

export const Profile = () => {

    const { isProfileTab, setIsProfileTab } = useContext(DataContext);

    const { authState } = useContext(AuthContext);
    useEffect(() => {
        changeTitle("My Profile");
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="user-details-page">
            <h1 className="user-details-heading">User Details</h1>
            <div className="user-details-container">
                <div className="user-details-tab-container">
                    <div className="user-details-tab">
                        <input
                            type="radio"
                            name="tabs"
                            id="profile"
                            checked={isProfileTab}
                            onChange={() => setIsProfileTab(!isProfileTab)}
                        />
                        <label htmlFor="profile" >Profile</label>
                    </div>
                    <div className="user-details-tab">
                        <input
                            type="radio"
                            name="tabs"
                            id="address"
                            checked={!isProfileTab}
                            onChange={() => setIsProfileTab(!isProfileTab)}
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                </div>

                {isProfileTab ? <UserProfile user={authState?.user} /> : <UserAddress />
                }
            </div>
        </div>
    );
}