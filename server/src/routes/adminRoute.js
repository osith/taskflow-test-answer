const express = require('express');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const UserLog = require("../models/UserLog");

const router = express.Router();

// Example: Admin-only route
router.get('/dashboard', protect, adminOnly, (req, res) => {
    res.json({ message: "Welcome to the admin dashboard" });
});

router.get("/logs", protect, adminOnly, async (req, res) => {
    const logs = await UserLog.find().sort({ loginTime: -1 });
    res.json(logs);
});

router.delete("/logs/:id", protect, adminOnly, async (req, res) => {
    await UserLog.findByIdAndDelete(req.params.id);
    res.json({ message: "Log deleted" });
});

module.exports = router;
