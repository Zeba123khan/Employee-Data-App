const Employee = require("../models/Employee");

exports.getallEmployee = async (req, res) => {
    try {
        const employees = await Employee.find({}); // Use plural for better clarity

        res.status(200).json({  // 200 for a successful GET request
            message: "Employee data fetched successfully",
            employees,  // Return employee data
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message + " - Data not fetched",
            success: false,
        });
    }
};
