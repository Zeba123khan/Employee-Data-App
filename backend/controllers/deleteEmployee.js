
const Employee = require("../models/Employee");
exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params; // Get employee ID from URL parameters

        const deletedEmployee = await Employee.findByIdAndDelete(id);

        if (!deletedEmployee) {
            return res.status(404).json({
                message: "Employee not found",
                success: false,
            });
        }

        res.status(200).json({
            message: "Employee deleted successfully",
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message + " - Internal server error",
            success: false,
        });
    }
};
