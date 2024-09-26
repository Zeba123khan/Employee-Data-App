const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true,
    },
    emp_id: {
        type: String,
        required: true,
        unique: true,
    },
    designation: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        match: [/^\+?[0-9]{10,15}$/, 'Please provide a valid phone number'],
    },
    avatar: {
        type: String,
        default: function () {
            return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(this.name)}`;
        }
    }
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);
