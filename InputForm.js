import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function InputData({ formData, setFormData, setData, data, editingIndex }) {
  const navigate = useNavigate();
  const [localFormData, setLocalFormData] = useState({ name: '', email: '', phone: '', gender: '' });

  useEffect(() => {
    if (editingIndex !== null) {
      setLocalFormData(formData);
    }
  }, [editingIndex, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!localFormData.name || !localFormData.email || !localFormData.phone || !localFormData.gender) {
      alert('Please fill in all fields');
      return;
    }

    if (editingIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editingIndex ? localFormData : item
      );
      setData(updatedData);
    } else {
      setData([...data, localFormData]);
    }

    setFormData({ name: '', email: '', phone: '', gender: '' });
    setLocalFormData({ name: '', email: '', phone: '', gender: '' });
    navigate('/table'); // Navigate to the table page after form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={localFormData.name}
            onChange={handleChange}
            className="form-control"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={localFormData.email}
            onChange={handleChange}
            className="form-control"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={localFormData.phone}
            onChange={handleChange}
            className="form-control"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Gender:
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={localFormData.gender === 'Male'}
              onChange={handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={localFormData.gender === 'Female'}
              onChange={handleChange}
              className="ml-2"
            /> Female
          </div>
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        {editingIndex !== null ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default InputData;