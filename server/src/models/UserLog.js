const mongoose = require("mongoose");

const UserLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    fullName: { type: String },
    email: { type: String },
    role: { type: String, enum: ["user", "admin"] },
    token: { type: String },
    ipAddress: { type: String },
    loginTime: { type: Date, default: Date.now },
    logoutTime: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model("UserLog", UserLogSchema);
