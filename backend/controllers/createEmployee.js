const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
    try {
        const { name, emp_id, designation, department, phone } = req.body;

        // Create a new employee document with the generated avatar URL
        const employee = await Employee.create({
            name,
            emp_id,
            designation,
            department,
            phone,
            avatar: `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(name)}` // Fixed the typo and added URL encoding for the name
        });

        res.status(201).json({
            message: "Employee created successfully",
            employee,
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message + " - Internal server error",
            success: false,
        });
    }
};
