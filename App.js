import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputData from './InputForm';
import DataTable from './DataTable';


function App2() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', gender: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  return (
    <Router>
      <div className="container mt-4">
        <h2>CRUD Table</h2>
        <Routes>
          <Route
            path="/"
            element={<InputData formData={formData} setFormData={setFormData} setData={setData} data={data} editingIndex={editingIndex} />}
          />
          <Route
            path="/table"
            element={<DataTable data={data} setFormData={setFormData} setEditingIndex={setEditingIndex} setData={setData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App2;