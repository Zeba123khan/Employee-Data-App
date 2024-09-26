import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import UpdateEmployee from './pages/UpdateEmployee'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Add Employee Route */}
        <Route path="/addemployee" element={<AddEmployee />} />

        {/*  Update Employee Route */}
        <Route path='/updateemployee/:id' element={<UpdateEmployee />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
