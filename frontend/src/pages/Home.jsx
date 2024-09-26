import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Home = () => {
    const [empdata, setEmpData] = useState([]);
    const navigate = useNavigate();

    const fetchAllData = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_URL}/getallemployees`);
            const data = await res.json();
            setEmpData(data.employees);
        } catch (error) {
            console.error("Error fetching employee data:", error);
        }
    };

    const deleteEmployee = async (id) => {
        try {
            await fetch(`${import.meta.env.VITE_URL}/delete/${id}`, {
                method: 'DELETE',
            });
            fetchAllData(); // Refresh data after deletion
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            {/* Page Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-10">
                Employee Data
            </h1>

            {/* Add Employee Button */}
            <div className="flex justify-end mb-8">
                <Link
                    to="/addemployee"
                    className="bg-[#003366] text-white px-6 py-3 rounded shadow-lg hover:bg-[#002244] transition-colors text-sm sm:text-base"
                >
                    + Add New Employee
                </Link>
            </div>

            {/* Employee Table */}
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full bg-white rounded-lg text-xs sm:text-sm md:text-base">
                    <thead>
                        <tr className="bg-[#003366] text-white">
                            <th className="py-2 px-2 text-left">Avatar</th>
                            <th className="py-2 px-2 text-left">Name</th>
                            <th className="py-2 px-2 text-left">Employee ID</th>
                            <th className="py-2 px-2 text-left">Designation</th>
                            <th className="py-2 px-2 text-left">Department</th>
                            <th className="py-2 px-2 text-left">Phone</th>
                            <th className="py-2 px-2 text-left">Created At</th>
                            <th className="py-2 px-2 text-left">Updated At</th>
                            <th className="py-2 px-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empdata.map((item, index) => (
                            <tr
                                key={index}
                                className={`border-b ${index % 2 === 0 ? 'bg-[#F0F4F8]' : 'bg-white'} hover:bg-[#E6E9ED]`}
                            >
                                <td className="py-2 px-2">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://via.placeholder.com/40';
                                        }}
                                    />
                                </td>
                                <td className="py-2 px-2">{item.name}</td>
                                <td className="py-2 px-2">{item.emp_id}</td>
                                <td className="py-2 px-2">{item.designation}</td>
                                <td className="py-2 px-2">{item.department}</td>
                                <td className="py-2 px-2">{item.phone}</td>
                                <td className="py-2 px-2">
                                    {new Date(item.createdAt).toLocaleString()}
                                </td>
                                <td className="py-2 px-2">
                                    {new Date(item.updatedAt).toLocaleString()}
                                </td>
                                <td className="py-2 px-2 flex space-x-2">
                                    <button
                                        className="text-[#003366] transition-transform transform hover:scale-110"
                                        onClick={() => deleteEmployee(item._id)}
                                    >
                                        <FaTrash size={18} />
                                    </button>
                                    <button
                                        className="text-[#003366] transition-transform transform hover:scale-110"
                                        onClick={() => navigate(`/updateemployee/${item._id}`, { state: { employee: item } })}
                                    >
                                        <FaEdit size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* No Data State */}
                {empdata.length === 0 && (
                    <div className="text-center py-6">
                        <p className="text-gray-500 text-lg">No employees found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
