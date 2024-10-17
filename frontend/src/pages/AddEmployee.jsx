import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
        name: '',
        emp_id: '',
        designation: '',
        department: '',
        phone: ''
    });

    const navigate = useNavigate();  // useNavigate hook for navigation

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent page reload on form submit
        try {
            const res = await fetch(`${import.meta.env.VITE_URL}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)  // Send form data as JSON
            });
            const result = await res.json();

            // Display success toast
            toast.success('Employee created successfully!');

            // Clear form
            setFormData({ name: '', emp_id: '', designation: '', department: '', phone: '' });

            // Redirect to homepage after 2 seconds
            setTimeout(() => {
                navigate('/');
            }, 2000);

            console.log(result);
        } catch (error) {
            console.error('Error submitting form:', error);

            // Display error toast
            toast.error('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-lg my-8 sm:my-16 relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#003366]">Add New Employee</h2>

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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 font-semibold text-[#003366]">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            maxLength="50"
                            placeholder="Enter Name"
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
                            required
                            maxLength="50"
                            placeholder="Enter Employee ID"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#003366] focus:border-[#003366]"
                        />
                    </div>
                </div>

                {/* Designation and Department Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 font-semibold text-[#003366]">Designation</label>
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            required
                            placeholder="Enter Designation"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#003366] focus:border-[#003366]"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-[#003366]">Department</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            placeholder="Enter Department"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#003366] focus:border-[#003366]"
                        />
                    </div>
                </div>

                {/* Phone Field */}
                <div>
                    <label className="block mb-2 font-semibold text-[#003366]">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter Phone Number"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#003366] focus:border-[#003366]"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#003366] text-white py-3 rounded-md font-semibold hover:bg-[#002244] transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddEmployee;
