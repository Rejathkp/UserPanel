import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import "./Education.css"; 

const Education = () => {
  const [educationData, setEducationData] = useState([]); 
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [formData, setFormData] = useState({
    degree: "",
    institution: "",
    year: "",
    state: "",
    district: "",
  }); 
  const [editId, setEditId] = useState(null); 

  useEffect(() => {
    fetchEducationData();
  }, []);

  const fetchEducationData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/education");
      setEducationData(response.data);
    } catch (error) {
      console.error("Error fetching education data:", error);
    }
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleEditClick = (id) => {
    const selectedEntry = educationData.find((edu) => edu._id === id);
    const [institution, district, state] = selectedEntry.institution.split(", ");
    setFormData({
      degree: selectedEntry.degree,
      institution: institution || "",
      year: selectedEntry.year,
      state: state || "",
      district: district || "",
    });
    setEditId(id);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setFormData({
      degree: "",
      institution: "",
      year: "",
      state: "",
      district: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChangesForAdd = async () => {
    const combinedInstitution = `${formData.institution}, ${formData.district}, ${formData.state}`;
    const newEntry = {
      degree: formData.degree,
      institution: combinedInstitution,
      year: formData.year,
    };
    try {
      await axios.post("http://localhost:4000/api/education", newEntry);
      fetchEducationData(); 
      handleCloseModal();
    } catch (error) {
      console.error("Error adding education entry:", error);
    }
  };

  const handleSaveChangesForEdit = async () => {
    const combinedInstitution = `${formData.institution}, ${formData.district}, ${formData.state}`;
    const updatedEntry = {
      degree: formData.degree,
      institution: combinedInstitution,
      year: formData.year,
    };
    try {
      await axios.put(`http://localhost:4000/api/education/${editId}`, updatedEntry);
      fetchEducationData(); 
      handleCloseModal();
    } catch (error) {
      console.error("Error updating education entry:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/education/${id}`);
      fetchEducationData();
    } catch (error) {
      console.error("Error deleting education entry:", error);
    }
  };

  return (
    <div className="education-container">
      <div className="header">
        <h3>Education</h3>
        <button className="update-btn" onClick={handleAddClick}>
          Add
        </button>
      </div>
      <div className="education-list">
        {educationData.map((edu) => (
          <div key={edu._id} className="education-item">
            <p>
              <strong>{edu.degree}</strong>
              <button className="edit-btn" onClick={() => handleEditClick(edu._id)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(edu._id)}>
                <FaTrash />
              </button>
            </p>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              ×
            </span>
            <h2>Add Education</h2>
            <form className="edu-modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Degree:</label>
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Institution:</label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Year:</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>State:</label>
                  <select name="state" value={formData.state} onChange={handleInputChange}>
                    <option value="">Select State</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>District:</label>
                  <select name="district" value={formData.district} onChange={handleInputChange}>
                    <option value="">Select District</option>
                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Kochi">Kochi</option>
                  </select>
                </div>
              </div>
              <div className="modal-buttons">
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="button" className="save-btn" onClick={handleSaveChangesForAdd}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              ×
            </span>
            <h2>Edit Education</h2>
            <form className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Degree:</label>
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Institution:</label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Year:</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>State:</label>
                  <select name="state" value={formData.state} onChange={handleInputChange}>
                    <option value="">Select State</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>District:</label>
                  <select name="district" value={formData.district} onChange={handleInputChange}>
                    <option value="">Select District</option>
                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Kochi">Kochi</option>
                  </select>
                </div>
              </div>
              <div className="modal-buttons">
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="button" className="save-btn" onClick={handleSaveChangesForEdit}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;