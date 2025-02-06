import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import "./Career.css";

const Career = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage the career objective text
  const [careerObjective, setCareerObjective] = useState("");

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fetch the career objective from the backend using axios
  useEffect(() => {
    const fetchCareerObjective = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/career");
        setCareerObjective(response.data.objective); // Set the fetched career objective
      } catch (error) {
        console.error("Error fetching career objective:", error);
      }
    };
    fetchCareerObjective();
  }, []);

  // Function to handle saving changes using axios
  const handleSave = async (updatedText) => {
    try {
      const response = await axios.post("http://localhost:4000/api/career", {
        objective: updatedText,
      });
      setCareerObjective(response.data.career.objective); // Update the state locally
      closeModal(); // Close the modal after saving
    } catch (error) {
      console.error("Error updating career objective:", error);
    }
  };

  return (
    <div className="career-container">
      {/* Header Section */}
      <div className="header">
        <h3>Career Objective</h3>
        {/* Dynamically change button text based on whether a career objective exists */}
        <button className="update-btn" onClick={openModal}>
          {careerObjective ? "Update" : "Add"}
        </button>
      </div>

      {/* Career Content Section */}
      <div className="career-content">
        {/* Display the career objective or a placeholder if none exists */}
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
              defaultValue={careerObjective} // Pre-fill the textarea with the current text
            ></textarea>
            <div className="modal-actions">             
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="save-btn"
                onClick={(e) => {
                  const updatedText = e.target.parentElement.previousElementSibling.value; // Get the value from the textarea
                  handleSave(updatedText); // Save the updated text
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