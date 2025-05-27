import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import Sidebar from "../../components/admin/Sidebar";

const AdminUserLogs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            const res = await axios.get("http://localhost:5000/admin/logs", {
                headers: { Authorization: token },
            });
            setLogs(res.data);
        } catch (err) {
            console.error("Failed to fetch logs", err);
            toast.error("Failed to load logs");
        } finally {
            setLoading(false);
        }
    };

    const deleteLog = async (id) => {
        if (!window.confirm("Are you sure you want to delete this log?")) return;
        try {
            await axios.delete(`http://localhost:5000/admin/logs/${id}`, {
                headers: { Authorization: token },
            });
            setLogs(logs.filter((log) => log._id !== id));
            toast.success("Log deleted");
        } catch (err) {
            console.error("Failed to delete log", err);
            toast.error("Delete failed");
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">🧾 User Login Logs</h1>

                {loading ? (
                    <p>Loading logs...</p>
                ) : logs.length === 0 ? (
                    <p>No logs found.</p>
                ) : (
                    <div className="bg-white p-4 shadow rounded-lg">
                        <table className="w-full border-collapse text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">Role</th>
                                    <th className="p-2">IP Address</th>
                                    <th className="p-2">Login Time</th>
                                    <th className="p-2">Logout Time</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map((log) => (
                                    <tr key={log._id} className="border-b hover:bg-gray-50">
                                        <td className="p-2">{log.fullName}</td>
                                        <td className="p-2">{log.email}</td>
                                        <td className="p-2 capitalize">{log.role}</td>
                                        <td className="p-2">{log.ipAddress}</td>
                                        <td className="p-2">
                                            {new Date(log.loginTime).toLocaleString()}
                                        </td>
                                        <td className="p-2">
                                            {log.logoutTime
                                                ? new Date(log.logoutTime).toLocaleString()
                                                : "-"}
                                        </td>
                                        <td className="p-2">
                                            <button
                                                onClick={() => deleteLog(log._id)}
                                                className="text-red-600 hover:text-red-800"
                                                title="Delete log"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminUserLogs;
