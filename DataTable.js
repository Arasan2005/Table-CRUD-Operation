import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function DataTable({ data, setFormData, setEditingIndex, setData }) {
  const navigate = useNavigate();

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(data[index]);
    navigate('/'); 
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);
    }
  };

  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.gender}</td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger ml-2"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;