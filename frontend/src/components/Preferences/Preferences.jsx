import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Preferences.css";

const Preference = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preference, setPreference] = useState("");

  useEffect(() => {
    const fetchPreference = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/preference");
        setPreference(response.data.preference);
      } catch (error) {
        console.error("Error fetching preference:", error);
      }
    };
    fetchPreference();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = async () => {
    try {
      const textarea = document.querySelector(".modal textarea");
      const updatedText = textarea.value.trim();

      if (!updatedText) {
        alert("Preference cannot be empty!");
        return;
      }

      const response = await axios.post("http://localhost:4000/api/preference", {
        preference: updatedText,
      });

      setPreference(response.data.preference);
      closeModal();
      console.log("Preference saved successfully:", response.data);
    } catch (error) {
      console.error("Error updating preference:", error);
      alert("Failed to save preference. Please try again.");
    }
  };

  return (
    <div className="preference-container">
      <div className="header">
        <h3>Preferences</h3>
        <button className="update-btn" onClick={openModal}>
          {preference ? "Update" : "Add"}
        </button>
      </div>
      <div className="preference-content">
        <p>{preference || "No preferences set yet."}</p>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>{preference ? "Update Preferences" : "Add Preferences"}</h2>
            <textarea placeholder="Enter your preferences..." rows="5" defaultValue={preference}></textarea>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preference;