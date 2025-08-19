import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import "./Experience.css"

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    duration: "",
    projects: [],
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("https://userpanel-backend.onrender.com/api/experiences");
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };
    fetchExperiences();
  }, []);

  const openAddModal = () => {
    setNewExperience({ role: "", company: "", duration: "", projects: [] });
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (experience) => {
    setEditId(experience._id);
    setNewExperience(experience);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleAddExperience = async () => {
    if (newExperience.role.trim() !== "" && newExperience.company.trim() !== "") {
      try {
        const response = await axios.post("https://userpanel-backend.onrender.com/api/experiences", newExperience);
        setExperiences([...experiences, response.data.experience]);
        closeAddModal();
      } catch (error) {
        console.error("Error adding experience:", error);
      }
    }
  };

  const handleUpdateExperience = async () => {
    if (newExperience.role.trim() !== "" && newExperience.company.trim() !== "") {
      try {
        const response = await axios.put(
          `http://localhost:4000/api/experiences/${editId}`,
          newExperience
        );
        const updatedExperiences = experiences.map((exp) =>
          exp._id === editId ? response.data.experience : exp
        );
        setExperiences(updatedExperiences);
        closeEditModal();
      } catch (error) {
        console.error("Error updating experience:", error);
      }
    }
  };

  const handleDeleteExperience = async (id) => {
    try {
      await axios.delete(`https://userpanel-backend.onrender.com/api/experiences/${id}`);
      setExperiences(experiences.filter((exp) => exp._id !== id));
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  return (
    <div className="work-experience">
      <div className="experience-header">
        <h3>Work Experience</h3>
        <button className="add-btn" onClick={openAddModal}>
          Add Experience
        </button>
      </div>

      <div className="experience-content">
        {experiences.length > 0 ? (
          experiences.map((exp) => (
            <div key={exp._id} className="experience-card">
              <div className="experience-role">
                
                  <p>{exp.role}</p>
                  <div style={{ display: "flex" }}>
                    <button className="edit-btn" onClick={() => openEditModal(exp)}>
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteExperience(exp._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>               
              </div>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-duration">{exp.duration}</p>
              {exp.projects.length > 0 && (
                <div className="top-projects">
                  <p>Top Projects</p>
                  <div className="project-tags">
                    {exp.projects.map((project, i) => (
                      <span key={i} className="project-tag">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No work experiences added yet.</p>
        )}
      </div>

      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeAddModal}>
              &times;
            </span>
            <h2>Add Work Experience</h2>
            <div className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    placeholder="Enter role..."
                    value={newExperience.role}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, role: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Enter company..."
                    value={newExperience.company}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, company: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="Enter duration..."
                    value={newExperience.duration}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, duration: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Projects (comma-separated)</label>
                  <input
                    type="text"
                    placeholder="Enter projects..."
                    value={newExperience.projects.join(",")}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        projects: e.target.value.split(",").map((p) => p.trim()),
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={closeAddModal}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleAddExperience}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeEditModal}>
              &times;
            </span>
            <h2>Edit Work Experience</h2>
            <div className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    placeholder="Enter role..."
                    value={newExperience.role}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, role: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Enter company..."
                    value={newExperience.company}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, company: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="Enter duration..."
                    value={newExperience.duration}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, duration: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Projects (comma-separated)</label>
                  <input
                    type="text"
                    placeholder="Enter projects..."
                    value={newExperience.projects.join(",")}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        projects: e.target.value.split(",").map((p) => p.trim()),
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={closeEditModal}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleUpdateExperience}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
