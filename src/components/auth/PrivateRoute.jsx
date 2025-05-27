import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PrivateRoute = ({ children, allowedRoles }) => {
    const { token, role, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    if (!token) return <Navigate to="/login" />;

    if (allowedRoles && !allowedRoles.includes(role)) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
