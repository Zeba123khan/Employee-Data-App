const express = require("express");
const router = express.Router();

const { createEmployee } = require("../controllers/createEmployee");
const { getallEmployee } = require("../controllers/getallEmployee");  // Import the new controller
const { updateEmployee } = require("../controllers/updateEmployee");
const { deleteEmployee } = require("../controllers/deleteEmployee");

// POST route for creating an employee
router.post("/create", createEmployee);

// GET route for fetching all employees
router.get("/getallemployees", getallEmployee);

// Route to update employee by ID
router.put("/update/:id", updateEmployee);  

 // Route to delete employee by ID
router.delete("/delete/:id", deleteEmployee);     

module.exports = router;
