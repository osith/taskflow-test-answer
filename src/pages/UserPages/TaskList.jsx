import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import UserSidebar from "./UserSidebar";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const [statusFilter, setStatusFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    const handleMarkComplete = (taskId) => {
        const updated = tasks.map((task) =>
            task.id === taskId ? { ...task, progress: 100 } : task
        );
        setTasks(updated);
        localStorage.setItem("tasks", JSON.stringify(updated));
    };

    const handleEditClick = (task) => {
        setEditingTask(task);
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        const updated = tasks.map((t) =>
            t.id === editingTask.id ? editingTask : t
        );
        setTasks(updated);
        localStorage.setItem("tasks", JSON.stringify(updated));
        toast.success("Task updated!");
        setIsEditing(false);
    };

    const filteredTasks = tasks.filter((task) => {
        const matchesStatus =
            statusFilter === "all"
                ? true
                : statusFilter === "complete"
                    ? task.progress === 100
                    : task.progress < 100;

        const matchesSearch = task.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchesStatus && matchesSearch;
    });

    return (
        <div className="flex">
            <UserSidebar />
            <div className="p-6 w-full">
                <h1 className="text-2xl font-bold mb-4">📋 Task List</h1>

                <ToastContainer position="top-right" autoClose={3000} />

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Search by title..."
                        className="w-full md:w-1/3 border p-2 rounded"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="w-full md:w-1/4 border p-2 rounded"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="all">All Tasks</option>
                        <option value="complete">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>

                {filteredTasks.length === 0 ? (
                    <p>No matching tasks found.</p>
                ) : (
                    filteredTasks.map((task) => (
                        <div
                            key={task.id}
                            className="bg-white p-4 mb-4 border rounded shadow-sm"
                        >
                            <h2 className="text-xl font-semibold">{task.title}</h2>
                            <p>{task.description}</p>
                            <p>
                                <strong>Assigned To:</strong> {task.assignedTo}
                            </p>
                            <p>
                                <strong>Deadline:</strong> {task.deadline}
                            </p>
                            <p>
                                <strong>Status:</strong>{" "}
                                {task.progress === 100 ? "Complete" : "In Progress"}
                            </p>

                            <div className="flex gap-4 mt-3">
                                {task.progress < 100 && (
                                    <button
                                        onClick={() => handleMarkComplete(task.id)}
                                        className="px-4 py-1 bg-green-500 text-white rounded"
                                    >
                                        ✅ Mark Complete
                                    </button>
                                )}
                                <button
                                    onClick={() => handleEditClick(task)}
                                    className="px-4 py-1 bg-yellow-500 text-white rounded"
                                >
                                    ✏️ Edit
                                </button>
                            </div>
                        </div>
                    ))
                )}

                {isEditing && (
                    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                            <h2 className="text-xl font-semibold mb-3">Edit Task</h2>
                            <input
                                type="text"
                                className="w-full border p-2 mb-3"
                                value={editingTask.title}
                                onChange={(e) =>
                                    setEditingTask({
                                        ...editingTask,
                                        title: e.target.value,
                                    })
                                }
                            />
                            <textarea
                                className="w-full border p-2 mb-3"
                                value={editingTask.description}
                                onChange={(e) =>
                                    setEditingTask({
                                        ...editingTask,
                                        description: e.target.value,
                                    })
                                }
                            />
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="px-3 py-1 bg-gray-400 text-white rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveEdit}
                                    className="px-3 py-1 bg-blue-600 text-white rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskList;
