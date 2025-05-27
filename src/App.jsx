// App.jsx (Main App Component)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import UserDashboard from "./pages/UserPages/Dashboard";
import ProfilePage from "./pages/UserPages/ProfilePage";
import Dashboard from "./pages/AdminPages/Dashboard";
import UserPage from "./pages/UserPages/UserPage";
import Users from "./pages/AdminPages/Users";
import CalendarPage from "./pages/UserPages/CalendarPage";
import AuthProvider from "./contexts/AuthContext";
import NotificationsPage from "./pages/UserPages/NotificationsPage";
import NotificationProvider from "./contexts/NotificationContext";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import ManageUsers from "./pages/AdminPages/ManageUsers";
import ManageTasks from "./pages/AdminPages/ManageTasks";
import Settings from "./pages/AdminPages/Settings";
import ResetPassword from "./components/auth/ResetPassword";
import TaskList from "./pages/UserPages/TaskList";
import PrivateRoute from "./components/auth/PrivateRoute";
import AdminUserLogs from "./pages/AdminPages/AdminUserLogs";

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            <Route
              path="/admin/dashboard"
              element={
                <Dashboard />
              }
            />
            <Route
              path="/admin/users"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <Users />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/manage-users"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <ManageUsers />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/manage-tasks"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <ManageTasks />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <Settings />
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/user-logs"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <AdminUserLogs />
                </PrivateRoute>
              }
            />

            <Route
              path="/user/dashboard"
              element={
                <UserDashboard />
              }
            />
            <Route
              path="/user/userpage"
              element={
                <PrivateRoute allowedRoles={["user"]}>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/tasklist"
              element={
                <PrivateRoute allowedRoles={["user"]}>
                  <TaskList />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/notifications"
              element={
                <PrivateRoute allowedRoles={["user"]}>
                  <NotificationsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/calendar"
              element={
                <PrivateRoute allowedRoles={["user"]}>
                  <CalendarPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/profile"
              element={
                <PrivateRoute allowedRoles={["user"]}>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;