import { Navigate, useLocation } from "react-router";
// import { DataContext } from "../../Contexts/DataContext";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
    const { authState } = useContext(AuthContext);
    const location = useLocation();
    return authState?.token ? children : <Navigate to="/login" state={{ from: location?.pathname }} />;
}