import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/skills");
        setSkills(response.data); 
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewSkill(""); 
  };

  const handleAddSkill = async () => {
    if (newSkill.trim() !== "") {
      try {
        const response = await axios.post("http://localhost:4000/api/skills", { skill: newSkill.trim() });
        setSkills([...skills, response.data.skill]); 
        setNewSkill(""); 
        closeModal(); 
      } catch (error) {
        console.error("Error adding skill:", error);
      }
    }
  };

  const handleDeleteSkill = async (skillToDelete) => {
    try {
      await axios.delete(`http://localhost:4000/api/skills/${encodeURIComponent(skillToDelete)}`);
      setSkills(skills.filter((skill) => skill !== skillToDelete)); // Remove the skill from the list
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <div className="skills-container">
      <div className="header">
        <h3>Key Skills</h3>
        <button className="update-btn" onClick={openModal}>
          Add Skill
        </button>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
            <span
              className="delete-btn"
              onClick={() => handleDeleteSkill(skill)}
            >
              &times;
            </span>
          </span>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>Add New Skill</h2>
            <input
              type="text"
              placeholder="Enter a new skill..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleAddSkill}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;