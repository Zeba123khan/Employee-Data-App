const Employee = require("../models/Employee");

exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params; // Get employee ID from URL parameters
        const { name, emp_id, designation, department, phone } = req.body; // Get updated data from the request body

        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { name, emp_id, designation, department, phone },
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: "Employee updated successfully",
            employee: updatedEmployee,
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message + " - Internal server error",
            success: false,
        });
    }
};
