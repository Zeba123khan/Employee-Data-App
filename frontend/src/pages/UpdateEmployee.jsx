import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateEmployee = () => {
    const { id } = useParams();  // Extract employee _id from the URL
    const location = useLocation();
    const navigate = useNavigate();

    // If employee data is passed via state, use it, otherwise set as empty
    const [formData, setFormData] = useState(location.state?.employee || {
        name: '',
        emp_id: '',
        designation: '',
        department: '',
        phone: ''
    });

    const [updated, setUpdated] = useState(false);  // State to track if form is updated

    // Fetch employee data by _id if not passed from Home component
    useEffect(() => {
        if (!location.state?.employee) {
            const fetchEmployee = async () => {
                try {
                    const res = await fetch(`${import.meta.env.VITE_URL}/getallemployees/${id}`);
                    const data = await res.json();
                    setFormData(data.employee); // Pre-fill form with fetched data
                    setUpdated(false); // Reset the "updated" state after fetching data
                } catch (error) {
                    console.error('Error fetching employee:', error);
                }
            };
            fetchEmployee();
        }
    }, [id, location.state?.employee, updated]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${import.meta.env.VITE_URL}/update/${id}`, {  // Again, use the id (_id) in the API request
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await res.json();

            if (res.ok) {
                toast.success('Employee updated successfully!');
                setUpdated(true); // Trigger refetching of data
                setTimeout(() => {
                    navigate('/');  // Navigate after success
                }, 2000);
            } else {
                throw new Error(result.message || 'Failed to update employee.');
            }
        } catch (error) {
            toast.error('An error occurred while updating the employee.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg my-16 relative">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#003366]">Update Employee</h2>

            {/* Toast container for displaying messages */}
            <ToastContainer 
                position="top-center" 
                autoClose={3000} 
                hideProgressBar 
                newestOnTop 
                closeOnClick 
                pauseOnHover 
            />

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                    <label className="block mb-2 font-semibold text-[#003366]">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        maxLength="50"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#003366] focus:border-[#003366]"
                    />
                </div>

                {/* Employee ID Field */}
                <div>
                    <label className="block mb-2 font-semibold text-[#003366]">Employee ID</label>
                    <input
                        type="text"
                        name="emp_id"
                        value={formData.emp_id}
                        onChange={handleChange}
                        maxLength="50"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#003366] focus:border-[#003366]"
                    />
                </div>

                {/* Designation Field */}
                <div>
                    <label className="block mb-2 font-semibold text-[#003366]">Designation</label>
                    <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#003366] focus:border-[#003366]"
                    />
                </div>

                {/* Department Field */}
                <div>
                    <label className="block mb-2 font-semibold text-[#003366]">Department</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#003366] focus:border-[#003366]"
                    />
                </div>

                {/* Phone Field */}
                <div>
                    <label className="block mb-2 font-semibold text-[#003366]">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#003366] focus:border-[#003366]"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#003366] text-white py-3 rounded-md font-semibold hover:bg-[#002244] transition-colors"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default UpdateEmployee;
