import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Career.css";

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [careerObjective, setCareerObjective] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchCareerObjective = async () => {
      try {
        const response = await axios.get("https://userpanel-backend.onrender.com/api/career");
        setCareerObjective(response.data.objective); 
      } catch (error) {
        console.error("Error fetching career objective:", error);
      }
    };
    fetchCareerObjective();
  }, []);

  const handleSave = async (updatedText) => {
    try {
      const response = await axios.post("https://userpanel-backend.onrender.com/api/career", {
        objective: updatedText,
      });
      setCareerObjective(response.data.career.objective);
      closeModal(); 
    } catch (error) {
      console.error("Error updating career objective:", error);
    }
  };

  return (
    <div className="career-container">
      {/* Header Section */}
      <div className="header">
        <h3>Career Objective</h3>
        <button className="update-btn" onClick={openModal}>
          {careerObjective ? "Update" : "Add"}
        </button>
      </div>

      <div className="career-content">
        <p>{careerObjective || "No career objective set yet."}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>{careerObjective ? "Update Career Objective" : "Add Career Objective"}</h2>
            <textarea
              placeholder="Enter your career objective..."
              rows="5"
              defaultValue={careerObjective} 
            ></textarea>
            <div className="modal-actions">             
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="save-btn"
                onClick={(e) => {
                  const updatedText = e.target.parentElement.previousElementSibling.value;
                  handleSave(updatedText);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
